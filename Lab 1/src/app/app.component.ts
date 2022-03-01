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
  discount="NoDiscount";
  CategoryList:string[]=["number","string"]
  ProductList:string[]=["ID","name","Quantity","Price","Img"]
  UserName="";
  isPurchsed=false;
  fullname:string="ahmed hamdy"


  purshase(){

   this.isPurchsed=true;


  }


}
enum DiscountOffers {
  NoDiscount,
  ".10" ,
 ".15" ,
}


