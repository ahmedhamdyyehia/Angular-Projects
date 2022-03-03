import { Component } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag:boolean=false;
  Products:any;
  title = 'first';
  ClientName:string="ahmed";
  Discount:DiscountOffers=DiscountOffers['.10'];
  Storelogo:string="nikke";
  discount="NoDiscount";
  CategoryList:string[]=["number","string"]
  ProductList:string[]=["ID","name","Quantity","Price","Img"]
  UserName="";
  isPurchsed=false;
  fullname:string="ahmed hamdy"

  constructor(){}
  @ViewChild(ProductsComponent) ViewProductList!:ProductsComponent;
  ngAfterViewInit(): void {
    this.Products=this.ViewProductList.renderValues();
    
  }
  DisplayProducts()
{

  if(this.flag==false){
    this.flag=true;
  }
}
  purshase(){

   this.isPurchsed=true;


  }


}
enum DiscountOffers {
  NoDiscount,
  ".10" ,
 ".15" ,
}


