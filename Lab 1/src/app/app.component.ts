import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';
  ClientName:string="ahmed";
  Discount:DiscountOffers=DiscountOffers['.10'];
  Storelogo:string="nikke";
}
enum DiscountOffers {
  NoDiscount,
  ".10" ,
 ".15" ,
}

