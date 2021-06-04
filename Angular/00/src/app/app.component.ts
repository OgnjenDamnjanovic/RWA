import { Component, OnInit } from '@angular/core';
import { Image } from './models/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'rwa7';
  images: Image[]=[];

  ngOnInit(): void {
    this.images.push({
      imageUrl:"apple.jpg"
    },
    {
      imageUrl:"pineapple.jpg"
    },
    {
      imageUrl:"tomato.jpg"
    })
  }




}
