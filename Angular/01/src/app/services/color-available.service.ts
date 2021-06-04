import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import {catchError} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class ColorAvailableService {

  constructor(private httpClient: HttpClient) { }

  getAvailableColors() {
    return this.httpClient
      .get<Color[]>(environment.apiURL + '/availableColors')
      .pipe(catchError(errorHandler));
  }


}
const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    (error.status === 0)
      ? 'cant connect to api'
      : 'backend returned code';
      return throwError(errorMessage)
};
