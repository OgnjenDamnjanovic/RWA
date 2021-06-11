import { createAction, props } from "@ngrx/store";
import { Coordinates } from "../models/field";
import { Game } from "../models/game";


export const loadGame = createAction(
  'Load Saved Game',
  props<{
    savedGame:Game
  }>()
)
export const selectFigure = createAction(
  'Set selected figure',
  props<{
    figureCoords:Coordinates
  }>()
)
export const diselectFigure = createAction(
  'Diselect selected figure'
)
export const moveSelectedFigure = createAction(
  'Move Selected Figure',
  props<{
    destinationCoords:Coordinates

  }>()
)
export const removeFigure = createAction(
  'Move Selesacted Figure',
  props<{
    figureCoords:Coordinates

  }>()
)

