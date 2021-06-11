import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Game } from './models/game';
import { AppState } from './store/app-state';
import { selectGame } from './store/chess.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RealWorldChess';
  game:Observable<Game|null>=of(null)
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
    this.game=this.store.select(selectGame)
  }
}
