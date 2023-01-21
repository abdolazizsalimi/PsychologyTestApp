import { Injectable } from '@nestjs/common';
import { LoginInputDto } from 'src/auth/dtos/LoginUser.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput } from 'src/auth/dtos/CreateUser.dto';
import { randomInt } from 'crypto';
import { UpdateUserInput } from 'src/auth/dtos/UpdateUser.dto';
import { ReadUserInput } from 'src/auth/dtos/read-user.dto';
import { Prisma, user_role } from '@prisma/client';
import { createPaginationResult } from 'src/common/input/paganation.input';
import cleanDeep from 'clean-deep';
import { JwtService } from '@nestjs/jwt';
import { genUID } from 'src/utils/gUID';
var crypto = require('crypto');

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  getAuth(): string {
    return 'Hello World!';
  }

  async login(input: LoginInputDto) {
    const Userdata = await this.prisma.user.findUnique({
      where: {
        username: input.username,
      },
    });

    var hash = crypto
      .pbkdf2Sync(input.password, 'salt', 1000, 64, `sha512`)
      .toString('hex');

    if (hash === Userdata.password) {
      const payload = {
        username: input.username,
        password: input.password,
        id: genUID(),
      };

      return {
        access_token: this.jwtService.sign(payload),
        user: payload,
      };
    } else {
      return {
        error: 'password is wrong ! ',
      };
    }
  }

  async updateUser(input: UpdateUserInput) {
    const { data } = input;
    const username = data.username.toLowerCase();
    const updateUser = await this.prisma.user.update({
      where: {
        username: username,
      },
      data: {
        firstname: data.firstname.toLocaleLowerCase(),
        lastname: data.lastname.toLocaleLowerCase() || undefined,
        email: data.email.toLowerCase() || undefined,
      },
    });
    return updateUser;
  }

  async createUser(input: CreateUserInput) {
    const { data } = input;
    const username = data.username.toLowerCase();
    const email = data.email.toLowerCase();
    await this.verifyIfNewUserIsNotDuplicate(username, email);
    await this.verifyPasswordEqualToConfirmPassword(
      data.password,
      data.confirmPassword,
    );
    const hashedPassword = await this.createHashedPassword(data.password);

    const user = await this.prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        password: hashedPassword,
        username: username,
        phonenumber: data.phoneNumber,
        email: email,
        age: data.age,
        gender: data.gender,
        id_user: randomInt(10000000),
        role: data.role,
      },
    });
    return user;
  }

  async readUser(input: ReadUserInput) {
    const rawWhere = input.data || {};

    let whereClause: Prisma.userWhereInput = {
      id_user: rawWhere.id,
      username: rawWhere.username,
      email: rawWhere.email,
      lastname: rawWhere.lastname,
      firstname: rawWhere.firstname,
      phonenumber: rawWhere.phoneNumber,
      role: rawWhere.role,
    };

    whereClause = cleanDeep(whereClause);

    const count = this.prisma.user.count({ where: whereClause });
    const entity = this.prisma.user.findMany({
      where: whereClause,
      ...input?.sortBy?.convertToPrismaFilter(),
      ...input?.pagination?.convertToPrismaFilter(),
    });
    return createPaginationResult({ count, entity });
  }

  // verify(token: string): boolean {
  //   try {
  //     this.jwtService.verify(token.split(' ')[1]);
  //   } catch (err) {
  //     return false;
  //   }
  //   return true;
  // }

  private async createHashedPassword(password: string) {
    return await crypto
      .pbkdf2Sync(password, 'salt', 1000, 64, `sha512`)
      .toString('hex');
  }

  private async verifyIfNewUserIsNotDuplicate(username: string, email: string) {
    if (username) {
      const duplicateUsername = await this.prisma.user.findFirst({
        where: { username },
      });
      if (duplicateUsername) console.log('error in verifyUserIsNotDuplicate');
    }

    if (email) {
      const duplicateEmail = await this.prisma.user.findFirst({
        where: { email },
      });
      if (duplicateEmail) console.log('error in verifyUserIsNotDuplicate');
    }
  }

  async verifyPasswordEqualToConfirmPassword(
    newPassword: string,
    confirmPassword: string,
  ) {
    if (newPassword != confirmPassword)
      console.log('verifyPasswordEqualToConfirmPassword');
  }
}
