import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ClientName:string="ahmed";
  Discount:DiscountOffers=DiscountOffers['.10'];
  ngOnInit(): void {
  }

}
enum DiscountOffers {
  NoDiscount,
  ".10" ,
 ".15" ,
}
  
