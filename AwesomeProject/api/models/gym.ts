import { CommonArea } from "./commonArea";
import { GymAvailability } from "./gymAvailability";
import { GymBooking } from "./gymBookings";

export interface Gym extends CommonArea {
    maxCapacity: number;
    isOpen: boolean;
    availability: GymAvailability[];
    bookings: GymBooking[];
}
