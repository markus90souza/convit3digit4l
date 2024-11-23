import { Guest } from '@convitedigital/core'
import { GuestItem } from './guest-item'
import type { FC } from 'react'

export interface GuestListProps {
  guests: Guest[]
}

const GuestList: FC<GuestListProps> = ({ guests }) => {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {guests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  )
}

export { GuestList }
