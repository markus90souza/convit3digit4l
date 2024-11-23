import type { Event, Guest } from '@convitedigital/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventsService {
  constructor(readonly prisma: PrismaProvider) {}

  findAll(): Promise<Event[]> {
    return this.prisma.event.findMany() as any;
  }

  findById(id: string, isComplete: boolean = false): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: {
        guests: isComplete,
      },
    }) as any;
  }

  findBySlug(slug: string, isComplete: boolean = false): Promise<Event | null> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        date: true,
        password: isComplete,
        location: true,
        expectedAudience: isComplete,
        image: true,
        imageBanner: true,
        guests: isComplete,
      },
      where: { slug },
    }) as any;
  }

  create(event: Event) {
    return this.prisma.event.create({
      data: {
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        password: event.password,
        location: event.location,
        slug: event.slug,
        expectedAudience: event.expected_audience,
        image: event.image,
        imageBanner: event.image_banner,
      },
    });
  }

  createGuest(event: Event, guest: Guest) {
    return this.prisma.guest.create({
      data: {
        id: guest.id,
        name: guest.name,
        numberOfCompanions: +(guest.number_of_companions ?? 0),
        isCompanion: guest.is_companion,
        isConfirm: guest.is_confirm,
        email: guest.email,
        Event: {
          connect: {
            id: event.id,
          },
        },
      },
    });
  }
}
