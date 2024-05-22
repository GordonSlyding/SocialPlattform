import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  
    names = [
      'Dennis',
      'Bob',
      'Tom',
      'Dan',
      'Dave'
    ]

    images = ['assets/img/1.jpg','assets/img/2.jpg','assets/img/3.jpg','assets/img/4.jpg','assets/img/5.jpg']

    ages = ['15 Jahre alt', '20 Jahre alt', '19 Jahre alt', '22 Jahre alt', '19 Jahre alt']
}
