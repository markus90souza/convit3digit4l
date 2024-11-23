import { Event } from '@convitedigital/core'

const validateEvent = (event: Partial<Event>): string[] => {
  const erros: string[] = []

  if (!event.slug) {
    erros.push('Slug é obrigatório')
  }

  if (!event.title) {
    erros.push('Título é obrigatório')
  }

  if (!event.description) {
    erros.push('Descrição é obrigatória')
  }

  if (!event.date) {
    erros.push('Data é obrigatória')
  }

  if (!event.location) {
    erros.push('Local é obrigatório')
  }

  if (!event.expected_audience || event.expected_audience < 1) {
    erros.push('Público esperado é obrigatório')
  }

  if (!event.image) {
    erros.push('Imagem é obrigatória')
  }

  if (!event.image_banner) {
    erros.push('Imagem de fundo é obrigatória')
  }

  return erros
}

export { validateEvent }
