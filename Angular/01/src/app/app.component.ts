import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Color } from './models/color';
import { ColorAvailableService } from './services/color-available.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rwa7';
  availableColorsObs:Observable<Color[]> = of([]);
  frameColor:Color | null = null
  constructor(private colorService:ColorAvailableService){
}
ngOnInit(){
  this.availableColorsObs = this.colorService.getAvailableColors();
}

colorFrame(selectedColor:Color){
  this.frameColor=selectedColor;

}
/*getColorName():string{
  if(this.frameColor)
  return this.frameColor.colorName
  else
  return ""
}*/
}

