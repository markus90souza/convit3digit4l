//  Convidado

interface Guest {
  id: string
  name: string
  email: string
  is_confirm: boolean // Indica se está confirmado
  is_companion: boolean // Indica se possui convidado
  number_of_companions: number // Número de acompanhantes
}

export type { Guest }
