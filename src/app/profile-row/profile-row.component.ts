import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
  @Input() img = '/assets/img/posts/boy.jpg';
  @Input() name = 'David';
  @Input() description = '3 Jahre alt';
  @Input() canFollow = true;
 
  constructor(public fs: FriendService) { }
}
