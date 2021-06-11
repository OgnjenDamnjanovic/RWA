import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coordinates, Field } from 'src/app/models/field';

@Component({
  selector: 'app-chess-field',
  templateUrl: './chess-field.component.html',
  styleUrls: ['./chess-field.component.scss']
})
export class ChessFieldComponent implements OnInit {
@Input() field:Field|null=null;
@Input() selected:boolean=false

@Output() fieldSelected:EventEmitter<Coordinates>=new EventEmitter<Coordinates>();

@Output() fieldDiselected:EventEmitter<void>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  fieldLeftClicked(){
    if(this.field&&!this.selected){
    this.fieldSelected.emit(this.field.coords)
  }

  }
  fieldRightClicked(event:Event){
    if(this.field&&this.selected){
      this.fieldDiselected.emit()
    }
    return false;//!!!!
  }

}
