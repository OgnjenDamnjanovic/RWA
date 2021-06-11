import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Figure } from 'src/app/models/figure';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'
import { FigureService } from 'src/app/services/figure.service';

@Component({
  selector: 'app-chess-figure',
  templateUrl: './chess-figure.component.html',
  styleUrls: ['./chess-figure.component.scss']
})
export class ChessFigureComponent implements OnInit{
  icon:IconDefinition|null=null
  @Input() figure: Figure|null=null;
  constructor(private figureService:FigureService) { }

  ngOnInit(): void {
    if(this.figure)
    this.icon=this.figureService.iconDictionary[this.figure?.type]

  }

}
