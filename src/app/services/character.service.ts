import { ICharacter } from '../interfaces/characterInterface';
import { Responsemodel } from '../interfaces/responseInterface';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient : HttpClient) { }

  getCharacters(page : number, filter: string): Observable<ICharacter[]>{
    return this.httpClient.get<Responsemodel>("https://rickandmortyapi.com/api/character/?page=" + page + "&name="+ filter).pipe(map((result) => result.results));
  }
}
