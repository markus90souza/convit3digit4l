import { PrismaClient } from '@prisma/client';
import { events } from '@convitedigital/core';
const seed = async () => {
  const prisma = new PrismaClient();

  const transactions = events.map(async (event) => {
    await prisma.event.create({
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
        guests: {
          create: event.guests.map((guest) => ({
            name: guest.name,
            email: guest.email,
            isConfirm: guest.is_confirm,
            isCompanion: guest.is_companion,
            numberOfCompanions: guest.number_of_companions,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
  await prisma.$disconnect();
};

seed();
