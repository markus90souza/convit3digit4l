/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Guest, Event, events } from '@convitedigital/core'
import { use, useEffect, useState } from 'react'
import { DashboardEvent } from '../../_components/event-dashboard'

import { EventPasswordForm } from '../../_components/event-password-form'

export default function EventAppPage(props: any) {
  const params: any = use(props.params)

  const id = params.all[0]
  const [event, setEvent] = useState<Event | null>(null)
  const [password, setPassword] = useState<string | null>(params.all[1] ?? null)

  const present = event?.guests.filter((c) => c.is_confirm) ?? []
  const absent = event?.guests.filter((c) => !c.is_confirm) ?? []

  const total =
    present?.reduce((total: number, guest: Guest) => {
      return total + guest.number_of_companions + 1
    }, 0) ?? 0

  const loadEvent = () => {
    const event = events.find((ev) => ev.id === id && ev.password === password)
    setEvent(event ?? null)
  }

  useEffect(() => {
    loadEvent()
  }, [id, password])

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          event={event}
          present_guests={present}
          absent_guests={absent}
          total={total}
        />
      ) : (
        <EventPasswordForm />
      )}
    </div>
  )
}
