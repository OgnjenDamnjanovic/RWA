import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() image:Image|null=null
  imageFilter: String='';
  constructor() { }

  ngOnInit(): void {
  }
  blurImage(){
    this.imageFilter='blur(5px)'
  }
  hueImage(){
    this.imageFilter='hue-rotate(180deg)'
  }
  grayImage(){
    this.imageFilter='grayscale()'
  }
  resetImage(){
    this.imageFilter=""
  }


}
