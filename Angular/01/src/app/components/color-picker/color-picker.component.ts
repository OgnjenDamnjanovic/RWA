import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() colors:Observable<Color[]>=of([]);
  @Output() selectedColor:EventEmitter<Color> = new EventEmitter<Color>();
  constructor() { }

  ngOnInit(): void {
  }
  colorSelected(color: Color){
    this.selectedColor.emit(color)
  }

}
