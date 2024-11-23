import { Event } from '@convitedigital/core'
import { Info } from '@/components/shared/info'
import type { FC } from 'react'

export interface EventInfoProps {
  event: Event
  className?: string
}

export const EventInfo: FC<EventInfoProps> = ({ event, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{event.slug}: </span>
        <span className="text-xl text-zinc-300">{event.title}</span>
      </div>
      <div className="flex gap-2">
        <Info label="Data:">
          <span>
            {new Date(event.date!).toLocaleDateString()}
            {' às '}
            {new Date(event.date!).toLocaleTimeString()}
          </span>
        </Info>
        <Info label="Local:">{event.location}</Info>
      </div>
      <Info label="Descrição:">{event.description}</Info>
    </div>
  )
}
