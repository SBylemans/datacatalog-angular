import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-options-add',
  templateUrl: './options-add.component.html',
  styleUrls: ['./options-add.component.less']
})
export class OptionsAddComponent implements OnInit {

  user: User;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.authorizationService.getUser().subscribe(user => this.user = new User(user.name, user.roles));
  }

}
