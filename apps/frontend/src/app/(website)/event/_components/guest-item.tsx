import { Guest } from '@convitedigital/core'
import type { FC } from 'react'

export interface GuestItemProps {
  guest: Guest
}

const GuestItem: FC<GuestItemProps> = ({ guest }) => {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{guest.name}</span>
        <span className="text-sm text-zinc-400">{guest.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes</span>
        <span className="text-xl font-bold">{guest.number_of_companions}</span>
      </div>
    </li>
  )
}

export { GuestItem }
