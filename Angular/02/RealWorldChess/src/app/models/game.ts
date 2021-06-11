import { Board } from "./board";
import { Figure } from "./figure";

export interface Game{
  board:Board,
  whiteGraveyard:Figure[];
  blackGraveyard:Figure[];
}
