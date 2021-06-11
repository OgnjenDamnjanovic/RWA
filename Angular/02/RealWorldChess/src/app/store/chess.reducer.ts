import { createReducer, on } from '@ngrx/store';
import { Coordinates, Field } from '../models/field';
import { Color, Figure, FigureType } from '../models/figure';
import { Game } from '../models/game';
import * as Actions from './chess.actions';
import { selectSelectedFieldCoords } from './chess.selectors';

export interface ChessGameState {
  game: Game;
  selectedFieldCoords: Coordinates;
}
export const initialState: ChessGameState = {
  game: { board: { fields: [] }, blackGraveyard: [], whiteGraveyard: [] },
  selectedFieldCoords: { column: -1, row: -1 },
};

export const chessReducer = createReducer(
  initialState,
  on(Actions.loadGame, (state, { savedGame }) => ({
    ...state,
    game: savedGame,
  })),
  on(Actions.selectFigure, (state, { figureCoords }) => ({
    ...state,
    selectedFieldCoords: figureCoords,
  })),
  on(Actions.diselectFigure, (state) => ({
    ...state,
    selectedFieldCoords: initialState.selectedFieldCoords,
  })), //let fakeRow:Field[]=[{coords:{row:0,column:0},figure:{color:Color.black,type:FigureType.king},color:Color.black,}]
  on(Actions.copySelectedFigure, (state, { destinationCoords }) => {
    let selectedFigure: Figure | null =state.game.board.fields[state.selectedFieldCoords.row][state.selectedFieldCoords.column].figure;

    let updatedFields: Field[][] = state.game.board.fields.map(
      (row, rowIndex) => {
        return rowIndex != destinationCoords.row
          ? row
          : row.map((field, fieldIndex) => {
              return fieldIndex != destinationCoords.column
                ? field
                : { ...field, figure: selectedFigure };
            });
      }
    );
    return {
      ...state,
      game: {
        ...state.game,
        board: { ...state.game.board, fields: updatedFields },
      }
    };
  }),
  on(Actions.removeFigure, (state,{figureCoords})=>{

    let updatedFields:Field[][]= state.game.board.fields.map(
      (red, redIndex) => {
        return redIndex != figureCoords.row
          ? red
          : red.map((el, elIndex) => {
              return elIndex != figureCoords.column
                ? el
                : { ...el, figure: null };
            });
      }
    );
    return {
      ...state,
      game: {
        ...state.game,
        board: { ...state.game.board, fields: updatedFields },
      }
    };
  }),
  on(Actions.copyFigureToGraveyard, (state,{figureCoords})=>{
    const figure:Figure|null=state.game.board.fields[figureCoords.row][figureCoords.column].figure
    if(!figure) return state
    return (figure.color.toString()===Color[Color.white])
    ?{...state,game:{...state.game, whiteGraveyard:state.game.whiteGraveyard.concat([figure])}}
    :{...state,game:{...state.game, blackGraveyard:state.game.blackGraveyard.concat([figure])}}


  })


);






