import { Component, Input } from '@angular/core';
import {UserModel} from '../shared/models/user';

@Component({
  selector: 'display-users',
  templateUrl: '../app/display-users/display-users.component.html'
})

export class DisplayUsersComponent{
  @Input() childActiveUser: UserModel;
}
