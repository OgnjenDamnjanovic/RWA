import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import { GameDTO } from '../models/gameDTO';

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  constructor(private httpClient:HttpClient) { }
  loadGame(gameId:number) {
    return this.httpClient.get<GameDTO>(environment.apiURL + `games/${gameId}`)
      .pipe(catchError(errorHandler),
            map((gameDto:GameDTO)=> gameDto.savedGame)


      );
  }


}
const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    (error.status === 0)
      ? 'cant connect to api'
      : 'backend returned code';
      return throwError(errorMessage)
};

