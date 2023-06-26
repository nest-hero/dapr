import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Subscribe } from '../../lib/decorator/subsribe.decorator';
import { DaprPubSubPayload } from '../../lib/type/payload';

type TopicData = {
  example: string;
};
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Subscribe('topic')
  handler(data: TopicData, fullPayload: DaprPubSubPayload): string {
    console.log('AppController', data);
    console.log('AppController', fullPayload);
    return '';
  }
}
