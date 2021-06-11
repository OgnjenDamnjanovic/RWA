import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { AppState } from "./app-state";

export const selectChessGameFeature = (state:AppState)=> state.chessGame

export const selectGame = createSelector(
    selectChessGameFeature,
    (state)=>state.game
)
export const selectSelectedFieldCoords = createSelector(
  selectChessGameFeature,
  (state)=>state.selectedFieldCoords
)

