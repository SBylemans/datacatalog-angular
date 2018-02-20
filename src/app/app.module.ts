import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DatacatalogComponent } from './datacatalog/datacatalog.component';
import { DataService } from './data.service';
import { HttpClientModule} from '@angular/common/http';
import { DatacatalogAddComponent } from './datacatalog-add/datacatalog-add.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DatacatalogComponent,
    DatacatalogAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
