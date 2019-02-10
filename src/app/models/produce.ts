export interface Produce {
    name: string;
    category: string;
    brand: string;
    'price per pound': string;
    availability: boolean;
    'location in store': LocationInStore;
}

export interface LocationInStore {
    aisle: string
}