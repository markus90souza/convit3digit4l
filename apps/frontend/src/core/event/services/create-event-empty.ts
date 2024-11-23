import { Id, Event } from '@convitedigital/core'

const createEventEmpty = (): Partial<Event> => {
  return {
    id: Id.create(),
    title: '',
    description: '',
    date: new Date(),
    location: '',
    expected_audience: 1,
    image: '',
    image_banner: '',
  }
}

export { createEventEmpty }
