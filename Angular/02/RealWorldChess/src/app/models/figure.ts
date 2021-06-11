export enum FigureType{
  pawn,
  bushop,
  knight,
  rook,
  king,
  queen
}
export enum Color{
  black,
  white
}

export interface Figure{
    color: Color,
    type: FigureType
}
