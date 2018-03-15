import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user';
import {AuthorizationService} from '../authorization.service';
import {Option} from '../option';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-options-add',
  templateUrl: './options-add.component.html',
  styleUrls: ['./options-add.component.less']
})
export class OptionsAddComponent implements OnInit {

  user: User;
  option: Option = {type: '', value: '', checked: false};

  @ViewChild('optionsForm') public optionsForm: NgForm;

  constructor(private dataService: DataService, private authorizationService: AuthorizationService, private route: Router) { }

  ngOnInit() {
    this.authorizationService.getUser().subscribe(user => this.user = new User(user.name, user.roles));
  }

  save() {
    if (this.optionsForm.valid) {
      this.dataService.saveOption(this.option);
      this.route.navigateByUrl('/datacatalog/add');
    }
  }

  cancel() {
    this.route.navigateByUrl('/datacatalog/add');
  }
}
