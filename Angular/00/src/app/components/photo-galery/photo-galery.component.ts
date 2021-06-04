import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-photo-galery',
  templateUrl: './photo-galery.component.html',
  styleUrls: ['./photo-galery.component.scss']
})
export class PhotoGaleryComponent implements OnInit {

  @Input() images: Image[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
