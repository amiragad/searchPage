import { Availabl } from './availabl';

export interface Hotel {
    id: string;
    name: string;
    price: number;
    city : string;
    availability: Availabl[];
}