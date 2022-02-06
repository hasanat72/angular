import { Component } from '@angular/core';
import {ProductService} from './product.service'

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>,
  <img src="{{imageUrl}}" />,

  <rating [rating-value]= "4" ></rating>,
  <button  (click)="onClickMe($event)" class="btn btn-primary" [class.disabled]=" !isValid" > Submit</button>,
  <bs-jumbotron>
    <div class="heading">
      Hello world!
    </div>

    <div class="body">
      This is a simple hero unit !
    </div>
    <div class="description">
      random larger container
    </div>
    <div class="button">
      Learn more and More
    </div>
  </bs-jumbotron>
  <products></products>`,
  providers: [ProductService]
})
export class AppComponent {
  title = 'My First Angular App here';
  isValid = true;

  imageUrl= "https://www.freeimages.com/photo/a-kayak-rider-passing-by-1641874";

  onClickMe($event: MouseEvent) {
    console.log("Clicked", $event)
  }

}
