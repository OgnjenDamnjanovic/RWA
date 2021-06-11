import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faChessBishop, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class FigureService {
  public iconDictionary: {[key:string]:IconDefinition}
  constructor() {
    this.iconDictionary={
      'rook':faChessRook,
      'pawn':faChessPawn,
      'queen':faChessQueen,
      'king':faChessKing,
      'knight':faChessKnight,
      'bishop':faChessBishop
    }
  }
}

