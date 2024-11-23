interface Guest {
    id: string;
    name: string;
    email: string;
    is_confirm: boolean;
    is_companion: boolean;
    number_of_companions: number;
}

interface Event {
    id: string;
    slug: string;
    title: string;
    password: string;
    description: string;
    date: Date;
    image: string;
    image_banner: string;
    location: string;
    expected_audience: number;
    guests: Guest[];
}

declare const complementaryEvent: (eventPartial: Partial<Event>) => Event;

declare const complementaryGuest: (guest: Partial<Guest>) => Guest;

declare const createEventEmpty: () => Partial<Event>;

declare const createGuestEmpty: () => Partial<Guest>;

declare class Id {
    static create(): string;
    static isValid(id: string): boolean;
}

declare class Slug {
    static generate(value: string): string;
}

declare class Password {
    static nova(tamanho?: number): string;
}

declare class Data {
    static formatar(data: Date): string;
    static desformatar(data: string): Date;
}

declare const events: Event[];

export { Data, type Event, type Guest, Id, Password, Slug, complementaryEvent, complementaryGuest, createEventEmpty, createGuestEmpty, events };
