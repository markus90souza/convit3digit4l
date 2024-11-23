import type { Guest } from './guest'

interface Event {
  id: string
  slug: string // Alias
  title: string // Título
  password: string // Senha
  description: string // Descrição
  date: Date // Data
  image: string // image
  image_banner: string // Banner
  location: string //  locationização
  expected_audience: number // Número de pessoas esperadas
  guests: Guest[] // guests
}

export type { Event }
