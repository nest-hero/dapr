import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaprModule } from '../../lib/dapr.module';

@Module({
  imports: [DaprModule.register({ pubsubname: 'pubsub' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
