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
export const copySelectedFigure = createAction(
  'Copy Selected Figure',
  props<{
    destinationCoords:Coordinates

  }>()
)
export const removeFigure = createAction(
  'Remove Figure',
  props<{
    figureCoords:Coordinates

  }>()
)
export const copyFigureToGraveyard = createAction(
  'Copy Figure To Graveyard',
  props<{
    figureCoords:Coordinates

  }>()
)

