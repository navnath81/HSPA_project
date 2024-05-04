import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  Property:any = {

    "id":1,
    "name":"birla house",
    "type" : "house",
    price: 12000,

  }

}
