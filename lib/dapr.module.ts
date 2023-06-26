import { DynamicModule, Module } from '@nestjs/common'
import { DaprModuleConfig } from './type/config'
import { DAPR_MODULE_CONFIG } from './dapr.constants'
import { DaprController } from './dapr.controller'

@Module({
  providers: [],
  exports: [],
  controllers: [DaprController],
})
export class DaprModule {
  static register(config: DaprModuleConfig): DynamicModule {
    return {
      module: DaprModule,
      providers: [
        {
          provide: DAPR_MODULE_CONFIG,
          useValue: config,
        },
      ],
    }
  }
}
