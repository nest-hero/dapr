import { Controller, Get, Inject } from '@nestjs/common'
import { DAPR_MODULE_CONFIG } from './dapr.constants'
import { DaprModuleConfig } from './type/config'

@Controller()
export class DaprController {
  constructor(
    @Inject(DAPR_MODULE_CONFIG) private readonly config: DaprModuleConfig,
  ) {}
  @Get('/dapr/subscribe')
  handleSubscribeEvent() {
    return [
      {
        pubsubname: this.config.pubsubname,
        topic: '',
        routes: {
          default: '/products',
        },
      },
    ]
  }
}
