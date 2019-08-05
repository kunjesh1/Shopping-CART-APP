import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  @Input('product')product;
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }


  addToCart(product:Product)
  { 
  
     let cartId=localStorage.getItem('cartId');
     console.log(cartId);
    if(!cartId)
    {
     this.cartService.create({
       dateCreated:new Date().getTime()
     }).subscribe(result=>{
      
       localStorage.setItem('cartId',result["_id"]);
     });

    }
  }

}
