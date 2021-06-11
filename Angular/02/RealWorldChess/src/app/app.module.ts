import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './components/chess-game/chess-game.component';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessGraveyardComponent } from './components/chess-graveyard/chess-graveyard.component';
import { ChessFieldComponent } from './components/chess-field/chess-field.component';
import { ChessFigureComponent } from './components/chess-figure/chess-figure.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { ChessService } from './services/chess.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { chessReducer } from './store/chess.reducer';
import { FigureService } from './services/figure.service';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    ChessBoardComponent,
    ChessGraveyardComponent,
    ChessFieldComponent,
    ChessFigureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({chessGame:chessReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [ChessService,FigureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
