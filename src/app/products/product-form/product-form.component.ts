import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../shared/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',

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
              private toastr:ToastrService
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
    if(this.productId)
    {
    console.log("patching");
    this.productService.updateProduct(this.productId,product).subscribe(
      result=>{console.log("Updated successfully");
      console.log(result);
    },

      err=>console.log(err),
      ()=>{this.toastr.success("Updated successfully");});
    }
    else
    {
    this.productService.saveProducts(product).subscribe((result)=>{
      console.log("Added successfully\n"+result);
    },
    err=>{
      console.log("Something went wrong"+err);
      this.toastr.error("Someting Went Wrong");
    },
      ()=>{this.toastr.success("Added successfully");
    });
  }

  }

  getProducts()
  {
    this.productService.getProductbyId(this.productId).subscribe(result=>{
      console.log(result);
    });
  }



}
