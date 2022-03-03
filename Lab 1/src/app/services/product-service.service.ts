import { Injectable } from '@angular/core';
import { Iproduct } from '../Shared Classes and types/Iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  ProductList1:string[]=["ID","name","Quantity","Price","Img"]
  ProductList:Array<Iproduct>=[
    {
      ID:1,
      Name:"Samsung Galaxy M12",
      Quantity:1,
      Price:4000,
      Img:""
    },
    {
     ID:10,
     Name:"Levonp Legion 5",
     Quantity:2 ,
     Price:25000,
     Img:""
   },
   {
     ID:20,
     Name:"Tommy Hilfger",
     Quantity:3,
     Price:1500,
     Img:""
   },
  ]

  GetAllProducts() {
    return this.ProductList;
   
  }
  ProductListID!:any;

  GetProductById(id:any) {

    if(typeof id == 'number')
    {

     this.ProductList.filter((e)=>{
       if(e.ID===id){
        this.ProductListID=e;
       }

     });
     return this.ProductListID;

    }else{
      return null;
    }
 
  }
}
