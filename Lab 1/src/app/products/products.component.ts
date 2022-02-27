import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  Discount:DiscountOffers=DiscountOffers['.10'];
  Storename:string="addidas";
  Storelogo:string="nikke";
  ProductList:string[]=["ID","name","Quantity","Price","Img"]
  CategoryList:string[]=["number","string"]
  ClientName:string="ahmed";
  IsPurshased:boolean=false;

  ngOnInit(): void {
  }

}
enum DiscountOffers {
  NoDiscount,
  ".10" ,
 ".15" ,
}
