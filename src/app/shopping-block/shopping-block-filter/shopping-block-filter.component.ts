import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'shopping-block-filter',
  templateUrl: './shopping-block-filter.component.html',
  styleUrls: ['./shopping-block-filter.component.css']
})
export class ShoppingBlockFilterComponent implements OnInit {
  categories;
   @Input('category')category; 

  constructor(categoryService:CategoryService) {
    categoryService.getCategories().subscribe(res=>{
      console.log(res);
      this.categories=res;
    });
   }

  ngOnInit() {
  }

 

}
