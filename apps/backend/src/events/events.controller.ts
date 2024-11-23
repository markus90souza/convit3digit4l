import {
  Body,
  Controller,
  Get,
  Post,
  //Body,
  //Patch,
  Param,
  HttpException,
  //Delete,
} from '@nestjs/common';

import {
  Data,
  Event,
  Id,
  type Guest,
  complementaryEvent,
  complementaryGuest,
} from '@convitedigital/core';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() event: Event) {
    const eventCreated = await this.eventsService.findBySlug(event.slug);

    if (eventCreated && eventCreated.id !== event.id) {
      throw new HttpException('Event slug already exists', 400);
    }

    const eventComplementary = complementaryEvent(this.unserealize(event));

    await this.eventsService.create(eventComplementary);
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.eventsService.findById(data.id);

    if (!event) {
      throw new HttpException('Event not found', 400);
    }

    if (event.password !== data.password) {
      throw new HttpException('Wrong password', 400);
    }

    return this.serealize(event);
  }

  @Post(':slug/guest')
  async createGuest(@Param('slug') slug: string, @Body() guest: Guest) {
    const event = await this.eventsService.findBySlug(slug);

    if (!event) {
      throw new HttpException('Event not found', 400);
    }

    const guestComplementary = complementaryGuest(guest);

    await this.eventsService.createGuest(event, guestComplementary);
  }

  @Get()
  async findAll() {
    const events = await this.eventsService.findAll();
    return events.map(this.serealize);
  }

  private serealize(event: Event) {
    if (!event) {
      return null;
    }

    return {
      ...event,
      date: Data.formatar(event.date),
    };
  }

  private unserealize(event: any): Event {
    if (!event) {
      return null;
    }
    return {
      ...event,
      date: Data.desformatar(event.date),
    };
  }

  @Get(':idorslug')
  findByIdOrSlug(@Param('idorslug') idorslug: string) {
    let event: Event;
    if (Id.isValid(idorslug)) {
      event = this.eventsService.findById(idorslug, true) as any;
    } else {
      event = this.eventsService.findBySlug(idorslug, true) as any;
    }

    return this.serealize(event);
  }

  @Get('validate/:slug/:id')
  async validateSlug(@Param('slug') slug: string, @Param('id') id: string) {
    const event = await this.eventsService.findBySlug(slug);

    return {
      valid: !event || event.id === id,
    };
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
  //   return this.eventsService.update(+id, updateEventDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.eventsService.remove(+id);
  // }
}
