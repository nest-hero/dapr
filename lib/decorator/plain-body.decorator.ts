import {
  createParamDecorator,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common'
var getRawBody = require('raw-body')
export const PlainBody = createParamDecorator(
  async (_, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<import('express').Request>()
    if (!req.readable) {
      throw new BadRequestException('Invalid body')
    }

    return (await getRawBody(req)).toString('utf8').trim()
  },
)
