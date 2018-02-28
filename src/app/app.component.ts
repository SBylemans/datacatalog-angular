import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from './data.service';
import {Data} from './data';
import {User} from './user';
import {AuthorizationService} from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Datacatalog';
  searchTerm: string;
  user: User;

  constructor(private dataService: DataService, private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.authorizationService.getUser().subscribe(function(user) {
      this.user = new User(user.name, user.roles);
      this.authorizationService.user.emit(this.user);
    }.bind(this));
  }

  search() {
    this.dataService.searchFor.emit(this.searchTerm);
  }
  delete() {
    delete this.searchTerm;
    this.dataService.searchFor.emit('');
  }
}
