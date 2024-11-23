import { Event } from './model/event'
import { Guest } from './model/guest'

import { complementaryEvent } from './services/complementary-event'
import { complementaryGuest } from './services/complementary-guest'
import { createEventEmpty } from './services/create-event-empty'
import { createGuestEmpty } from './services/create-guest-empty'

export type { Event, Guest }

export {
  complementaryEvent,
  complementaryGuest,
  createEventEmpty,
  createGuestEmpty,
}
