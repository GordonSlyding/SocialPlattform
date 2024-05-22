import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SocialPlattform';

  postTexts = [
    'Hallo! Ich bin neu auf SocialLife!😎',
    'Hehe!🌱',
    'Cooles Bild, oder?🌲',
    'Prost!🍻'
  ]

  postPictures = [
    'boy.jpg',
    'flowers.jpg',
    'hills.jpg',
    '3.jpg'
  ]

}
