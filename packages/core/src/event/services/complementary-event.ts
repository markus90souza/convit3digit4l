import { Event } from './../model/event'
import { Id, Password } from './../../shared'

import { validateEvent } from './validate-event'

const complementaryEvent = (eventPartial: Partial<Event>): Event => {
  const errors = validateEvent(eventPartial)

  if (errors.length) {
    throw new Error(errors.join('\n'))
  }

  const event: Event = {
    ...eventPartial,
    id: eventPartial.id ?? Id.create(),
    password: eventPartial.password ?? Password.nova(20),
    expected_audience: +(eventPartial.expected_audience ?? 1),
  } as Event

  return event
}

export { complementaryEvent }
