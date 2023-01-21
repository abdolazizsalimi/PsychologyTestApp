import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const GetUserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    const userId = request.headers._tokenGuard.user.id
    return userId
  },
)
