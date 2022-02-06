import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from './products.component';

import {StarComponent} from './star.component';
import {StarFillComponent} from './stasrfill.component';
import {RatingComponent} from './rating.component';
import {ProductComponent} from "./product.component";
import {TruncatePipe} from "./truncate.pipe"
import {JumboTronComponent} from "./jumbotron.component";

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, StarComponent,StarFillComponent,RatingComponent,ProductComponent,TruncatePipe,JumboTronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
