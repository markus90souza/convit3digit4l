
import { v4 as uuid,validate } from 'uuid'

export class Id {
  static create(): string {
    return uuid()
  }

  static isValid(id: string): boolean {
    return validate(id)
  }
  
}
