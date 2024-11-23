import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { DbModule } from 'src/db/db.module';
import { EventsService } from './events.service';
//import { EventsService } from './events.service';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
