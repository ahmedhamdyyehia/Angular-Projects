import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Shared Classes and types/Iproduct';
import { Icategory } from '../Shared Classes and types/ICategory';
import { DiscountOffers }  from '../Shared Classes and types/Enum';
  import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductServiceService)
   {
    this.Discount=DiscountOffers.value1,
    this.StoreName="addidas",
    this.StoreLogo='./assets/banner.jpg',
    this.ClientName='Ahmed Hamdy',
    this.IsPurshased=true
    this.ProductList=[]
    this.CategoryList=[]

   }
   Discount:DiscountOffers ;
   StoreName:string ;
   StoreLogo:string;
   ProductList:Iproduct[];
   CategoryList:Icategory[];
   ClientName:string;
   IsPurshased:boolean;
   productList:any;  
   ProductID:any;  

   renderValues(){
  
    return this.productList=this.productService.GetAllProducts();
  }
  

  ngOnInit(): void {
  }

}
