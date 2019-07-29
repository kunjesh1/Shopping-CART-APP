import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../shared/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
   
  categories;
  data;
 productId='';
 product={};
 
  constructor(private categoryService:CategoryService,
              private router:Router,
              private productService:ProductService,
              private route: ActivatedRoute,
              ) {
                console.log(this.route);
                console.log(this.route.snapshot.params.id);
                 
                   this.productId=this.route.snapshot.params.id;

                  if(this.productId){
                  this.productService.getProductbyId(this.productId).subscribe(product=>{
                   this.product=product;
                   console.log(this.product);

                  });}

               
                  
                 
              }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
      console.log(data['name'])});



    
    
  }

  onSave(product){
    console.log(product);
    this.productService.saveProducts(product).subscribe((result)=>{
      console.log("Added successfully\n"+result);
    },
    err=>{
      console.log("Something went wrong"+err);
    });
  }

  getProducts()
  {
    this.productService.getProductbyId(this.productId).subscribe(result=>{
      console.log(result);
    });
  }



}
