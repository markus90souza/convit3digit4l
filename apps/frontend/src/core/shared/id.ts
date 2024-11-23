export class Id {
  static create(): string {
    return Array.from({ length: 3 }, () => this.hash()).join('-')
  }

  private static hash(): string {
    return Math.random().toString(36).substring(2, 15)
  }
}
