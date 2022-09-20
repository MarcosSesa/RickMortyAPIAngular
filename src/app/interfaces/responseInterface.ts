import { ICharacter } from './characterInterface';
export interface Responsemodel {
    info:    InfoModel;
    results: ICharacter[];
}

export interface InfoModel {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}