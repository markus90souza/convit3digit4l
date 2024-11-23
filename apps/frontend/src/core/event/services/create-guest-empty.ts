import { Id, Guest } from '@convitedigital/core'

const createGuestEmpty = (): Partial<Guest> => {
  return {
    id: Id.create(),
    name: '',
    email: '',
    is_confirm: true,
    is_companion: false,
    number_of_companions: 0,
  }
}

export { createGuestEmpty }
