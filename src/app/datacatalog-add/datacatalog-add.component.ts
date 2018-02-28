import {Component, OnInit, ViewChild} from '@angular/core';
import {Data} from '../data';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {Option} from '../option';
import {MenuElement} from '../menu-element';
import {NgForm} from '@angular/forms';
import {User} from '../user';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-datacatalog-add',
  templateUrl: './datacatalog-add.component.html',
  styleUrls: ['./datacatalog-add.component.less']
})
export class DatacatalogAddComponent implements OnInit {

  data: Data = {name: '', meta: new Map<string, string[]>(), description: ''};
  elements: MenuElement[] = [];
  user: User;

  @ViewChild('dataSourceForm') public addForm: NgForm;

  constructor(private dataService: DataService, private authorizationService: AuthorizationService, private router: Router) {

  }

  ngOnInit() {
    this.dataService.getFacetedSearch().subscribe(this.processFacetedSearchElements.bind(this));
    this.authorizationService.getUser().subscribe(user => this.user = new User(user.name, user.roles));
  }

  processFacetedSearchElements(data: Option[]) {
    const self = this;
    data.forEach(function(dataElement) {
      let notFound = true;
      self.elements.forEach(function(el) {
        if (el.title === dataElement.type) {
          if (el.subElements.indexOf(dataElement) < 0) {
            el.subElements.push(dataElement);
          }
          notFound = false;
        }
      });
      if (notFound) {
        self.elements.push({title: dataElement.type, subElements: [dataElement]});
      }
    });
  }

  save(): void {
    if (!this.addForm.invalid) {
      this.dataService.saveOne(this.data).subscribe(response =>
        this.router.navigateByUrl('/'));
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }
}
