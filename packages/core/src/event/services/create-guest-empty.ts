import { Guest } from './../model/guest'
import { Id } from './../../shared'

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
