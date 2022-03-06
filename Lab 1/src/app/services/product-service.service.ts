import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Iproduct } from '../Shared Classes and types/Iproduct';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
private _url :string="/assets/Data/emp.json"

getProduct()
{
  
     
  
}

  ProductList1:string[]=["ID","name","Quantity","Price","Img"]
  ProductList:Array<Iproduct>=[
    {
      ID:1,
      Name:"lapTop",
      Quantity:1,
      Price:7000,
      Img:""
    },
    {
     ID:2,
     Name:"mobile",
     Quantity:2,
     Price:5000,
     Img:""
   },
   {
     ID:3,
     Name:"TV",
     Quantity:1,
     Price:3000,
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

     this.ProductList.filter((event)=>{
       if(event.ID==id){
        this.ProductListID=event;
       }
     });
     return null;

    }else{
      return null;
    }
 
  }
}
