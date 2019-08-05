import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-block',
  templateUrl: './shopping-block.component.html',
  styleUrls:['./shopping-block.component.css']

})
export class ShoppingBlockComponent implements OnInit {
  products:Product[]=[];
 
  category;
  filteredProducts;

  constructor(
    route:ActivatedRoute,
    productService:ProductService,
   ) {

  productService.getProducts().pipe(
  switchMap(res=>
    {console.log(res);
      this.products=res;
    return route.queryParamMap;}
      ))
  .subscribe(params=>{
      this.category=params.get('category');
      this.filteredProducts=(this.category)?this.products.filter(p=>p.category===this.category):this.products;
    });



  

 

   }

  ngOnInit() {

 
  }

}
