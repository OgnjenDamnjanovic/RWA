import { Color, Figure } from "./figure";

export interface Coordinates{
  row:number,
  column:number;
}
export interface Field{
    coords:Coordinates
    figure: Figure|null,
    color: Color
}
