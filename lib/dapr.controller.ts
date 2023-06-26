import { Controller, Get, Inject, Post } from '@nestjs/common'
import { DAPR_MODULE_CONFIG } from './dapr.constants'
import { DaprModuleConfig } from './type/config'
import { listTopicHandler } from './decorator/subsribe.decorator'
import { PlainBody } from './decorator/plain-body.decorator'
import { DaprPubSubPayload } from './type/payload'

@Controller()
export class DaprController {
  constructor(
    @Inject(DAPR_MODULE_CONFIG) private readonly config: DaprModuleConfig,
  ) {}
  @Get('/dapr/subscribe')
  handleSubscribeEvent() {
    return listTopicHandler.map(({ topic, handler }) => {
      return {
        pubsubname: this.config.pubsubname,
        topic,
        routes: {
          default: '/dapr/default-handler',
        },
      }
    })
  }

  @Post('/dapr/default-handler')
  allTopicHandler(@PlainBody() rawBody: string) {
    const payload: DaprPubSubPayload = JSON.parse(rawBody)

    const topicHandler = listTopicHandler.find(it => it.topic === payload.topic)

    if (!topicHandler) {
      return
    }

    topicHandler.handler(payload.data, payload)
  }
}
