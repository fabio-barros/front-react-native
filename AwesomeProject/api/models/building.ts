import { Apartment } from "./apartment";
import { CommonArea } from "./commonArea";

export interface Building {
    id: string;
    name: string;
    description?: string;
    street?: string;
    zipcode?: string;
    apartments?: Apartment[];
    commonAreas?: CommonArea[];
}
