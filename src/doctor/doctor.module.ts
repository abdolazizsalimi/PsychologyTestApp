import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService , PrismaService]
})
export class DoctorModule {}
