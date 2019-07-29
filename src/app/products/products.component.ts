import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../model/product.model';
import { MatTableDataSource,MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  
listData:MatTableDataSource<any>;
displayedColumns:string[]=['title','price','actions'];
  products:Product[];
  filteredProducts:any[];
  subscription:Subscription;
  @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
  searchKey="";
  idValue;
  flag=false;
  item={id:"row_id"};


  constructor(
    private productService:ProductService,
    private router:Router
  ) { 

    this.subscription=this.productService.getProducts().subscribe(
      products=>{
      
        this.filteredProducts=this.products=products;
        this.listData=new MatTableDataSource(this.products);
        this.listData.sort=this.sort;
        this.listData.paginator=this.paginator;

},

      err=>{
        console.log(err);
      },

     ()=>{
      

      }
        
    ); 
    }

  ngOnInit() {
    console.log(this.idValue);   
}

onSearchClear(){
  this.searchKey="";
  this.applyFilter();

}

applyFilter(){
  this.listData.filter=this.searchKey.trim().toLowerCase();
  console.log(this.searchKey.trim().toLowerCase());

}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  
  }

  getValueId(id)

  {
    console.log(id);
  this.idValue=id;
   this.flag=true;

   this.router.navigate(['/products/new'], { state:{ "id":id } });
  }


}
