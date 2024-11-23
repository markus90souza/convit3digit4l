import type { Guest } from '../model/guest'
import { validateGuest } from './validate-guest'

const complementaryGuest = (guest: Partial<Guest>): Guest => {
  const errors = validateGuest(guest)

  if (errors.length > 0) {
    throw new Error(errors.join('\n'))
  }

  const quantityCompanions = guest.number_of_companions ?? 0
  const hasCompanions =
    guest.is_companion && guest.is_confirm && quantityCompanions > 0

  const updatedGuest = {
    ...guest,
    number_of_companions: hasCompanions ? quantityCompanions : 0,
    is_companion: hasCompanions,
  }

  return updatedGuest as Guest
}
export { complementaryGuest }
