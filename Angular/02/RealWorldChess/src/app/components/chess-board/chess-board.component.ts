import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Board } from 'src/app/models/board';
import { Coordinates } from 'src/app/models/field';
import { AppState } from 'src/app/store/app-state';
import * as Actions from '../../store/chess.actions'

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {

  @Input() chessBoard:Board|null=null
  @Input() selectedFieldCoords:Coordinates|null=null

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {


  }
  selectField(fieldCoords:Coordinates){
    if(this.selectedFieldCoords?.row==-1&&this.selectedFieldCoords.column==-1&&this.chessBoard?.fields[fieldCoords.row][fieldCoords.column].figure)
      this.store.dispatch(Actions.selectFigure({figureCoords:fieldCoords}))
    else{
      this.store.dispatch(Actions.moveSelectedFigure({destinationCoords:fieldCoords}))
      if(this.selectedFieldCoords)
      this.store.dispatch(Actions.removeFigure({figureCoords:this.selectedFieldCoords}))
      this.store.dispatch(Actions.diselectFigure());
    }


  }

  diselectField(){
    this.store.dispatch(Actions.diselectFigure())
  }


}
