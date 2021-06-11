import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Coordinates } from 'src/app/models/field';
import { Game } from 'src/app/models/game';
import { ChessService } from 'src/app/services/chess.service';
import { AppState } from 'src/app/store/app-state';
import { selectSelectedFieldCoords } from 'src/app/store/chess.selectors';
import * as Actions from '../../store/chess.actions'

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  @Input() whitePlayerName: string|null=null;
  @Input() blackPlayerName: string|null=null;
  @Input() game:Game|null=null
  selectedFieldCoords:Observable<Coordinates|null>=of(null);

  constructor(private chessService:ChessService, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.chessService.loadGame(1).subscribe((gameRetrieved:Game)=>{
      console.log(gameRetrieved)
      this.store.dispatch(Actions.loadGame({savedGame:gameRetrieved}))
    })

    this.selectedFieldCoords=this.store.select(selectSelectedFieldCoords)


  }



}
