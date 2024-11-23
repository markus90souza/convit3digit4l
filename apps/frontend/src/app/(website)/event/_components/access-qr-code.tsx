import { Event } from '@convitedigital/core'
import type { FC } from 'react'
import QRCode from 'react-qr-code'

export interface AccessQRCodeProps {
  event: Event
}

const AccessQRCode: FC<AccessQRCodeProps> = ({ event }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
      <span className="text-sm font-light text-zinc-400">
        Acesse via Mobile
      </span>
      <QRCode
        value={JSON.stringify({
          id: event.id,
          password: event.password,
        })}
        className="w-32 h-32"
      />
    </div>
  )
}
export { AccessQRCode }
