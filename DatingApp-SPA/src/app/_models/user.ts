import { Photo } from './Photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    Country: string;
    interest?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
