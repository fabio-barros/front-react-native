export interface Apartment {
    id: string;
    number: number;
    floor: number;
    buildingId?: string;
    isOccupied?: boolean;
}
