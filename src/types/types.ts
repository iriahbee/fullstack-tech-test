export interface ICharacterCore {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

export interface ICharacter extends ICharacterCore {
    origin: ILocation;
    location: ILocation;
    episodes: IEpisode[];
}

export interface Residents {
    id: number;
}
export interface ILocation {
    id: number;
    name: string;
    type: string;
    residents: [Residents];
    dimension: string;
}

export interface IEpisode {
    [x: string]: any;
    id: number;
    name: string;
    airDate: string;
    noOfCharacters: number;
    episode: string;
}
