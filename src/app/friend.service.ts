import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [];

  images = [];

  ages = [];

  constructor() { }

  addFriend(name:string, age:string, image:string  ) {
    this.names.push(name);
    this.ages.push(age);
    this.images.push(image);
  };
}
