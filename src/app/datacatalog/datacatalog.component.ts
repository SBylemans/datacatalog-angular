import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Data} from '../data';
import {Option} from '../option';
import {MenuElement} from '../menu-element';
import {Router} from '@angular/router';
import {User} from '../user';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-datacatalog',
  templateUrl: './datacatalog.component.html',
  styleUrls: ['./datacatalog.component.less']
})
export class DatacatalogComponent implements OnInit {

  private data: Data[] = [];
  private facetedData: Data[];
  elements: MenuElement[] = [];


  constructor(private dataService: DataService, private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(data => this.data = data);
    this.dataService.getFacetedSearch().subscribe(this.processFacetedSearchElements.bind(this));
    this.dataService.searchFor.subscribe(this.search.bind(this));
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

  getData() {
    if (typeof this.facetedData !== 'undefined') {
      return this.facetedData;
    }
    return this.data;
  }

  facetedSearch(element: MenuElement, subElement: Option) {
    this.facetedData = this.data.filter(d => d.meta[element.title.toLowerCase()] &&
      d.meta[element.title.toLowerCase()].indexOf(subElement.value) >= 0);
    const facetedSearchEnabled = this.elements.some(function(e) {
      return e.subElements.some(function(sub) {
        if (sub.checked) {
          return true;
        }
      });
    });
    if (!facetedSearchEnabled) {
      delete this.facetedData;
    }
  }

  search(searchTerm: string) {
    if (searchTerm === '') {
      this.dataService.getAll().subscribe(data => this.data = data);
    } else {
      this.dataService.search(searchTerm).subscribe(data => this.data = data);
    }
  }

}
