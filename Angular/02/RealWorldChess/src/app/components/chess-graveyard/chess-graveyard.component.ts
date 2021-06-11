import { Component, Input, OnInit } from '@angular/core';
import { Figure } from 'src/app/models/figure';

@Component({
  selector: 'app-chess-graveyard',
  templateUrl: './chess-graveyard.component.html',
  styleUrls: ['./chess-graveyard.component.scss']
})
export class ChessGraveyardComponent implements OnInit {

  @Input() figures: Figure[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
