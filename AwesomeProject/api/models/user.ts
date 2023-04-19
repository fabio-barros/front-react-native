import { Phone } from "./phone";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    cpf: string;
    role: string;
    phone: Phone;
}
