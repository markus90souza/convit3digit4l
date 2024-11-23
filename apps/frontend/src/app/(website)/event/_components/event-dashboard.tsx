/* eslint-disable camelcase */
import { Guest, Event } from '@convitedigital/core'
import { EventInfo } from './event-info'
import { AccessQRCode } from './access-qr-code'
import { Statistic } from '@/components/shared/statistic'
import { GuestList } from './guest-list'
import type { FC } from 'react'

export interface DashboardEventProps {
  event: Event
  present_guests: Guest[]
  absent_guests: Guest[]
  total: number
}

const DashboardEvent: FC<DashboardEventProps> = ({
  event,
  absent_guests,
  present_guests,
  total,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <EventInfo event={event} className="flex-1" />
        <AccessQRCode event={event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistic
          title="Expectativa de Convidados:"
          value={event.expected_audience}
          image="/icones/convidados.svg"
        />
        <Statistic
          title="Confirmações:"
          // eslint-disable-next-line camelcase
          value={present_guests.length}
          image="/icones/confirmados.svg"
        />
        <Statistic
          title="Total Confirmado:"
          value={total}
          image="/icones/acompanhantes.svg"
        />
      </div>

      <button className="botao azul self-end mt-12">
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confimaram PRESENÇA
      </span>
      <GuestList guests={present_guests} />

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <GuestList guests={absent_guests} />
    </div>
  )
}

export { DashboardEvent }
