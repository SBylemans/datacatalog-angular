import { Component, OnInit } from '@angular/core';
import {Data} from '../data';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {Option} from '../option';
import {MenuElement} from '../menu-element';

@Component({
  selector: 'app-datacatalog-add',
  templateUrl: './datacatalog-add.component.html',
  styleUrls: ['./datacatalog-add.component.less']
})
export class DatacatalogAddComponent implements OnInit {

  data: Data ;
  elements: MenuElement[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getFacetedSearch().subscribe(this.processFacetedSearchElements.bind(this));
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

  save() {
    this.dataService.saveOne(this.data).subscribe(response =>
      this.router.navigateByUrl('/'));
  }
}
