import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Subscribe } from '../../lib/subsribe.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Subscribe('example')
  handleExampleEvent(): string {
    return this.appService.getHello();
  }
}
