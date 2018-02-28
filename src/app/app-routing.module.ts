import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatacatalogComponent } from './datacatalog/datacatalog.component';
import { DatacatalogAddComponent} from './datacatalog-add/datacatalog-add.component';
import {OptionsAddComponent} from './options-add/options-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/datacatalog', pathMatch: 'full'},
  {path: 'datacatalog', component: DatacatalogComponent},
  {path: 'datacatalog/add', component: DatacatalogAddComponent},
  {path: 'options/add', component: OptionsAddComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
