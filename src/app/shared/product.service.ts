import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Product} from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService{

    constructor(private http:HttpClient){

    }

   saveProducts(product){
        return this.http.post(environment.apiBaseUrl+"/products",product);
    }

  public getProducts():Observable<Product[]>{

        return this.http.get<Product[]>(environment.apiBaseUrl+"/fetch/products");
    }

  public getProductbyId(id):Observable<Product[]>{
      return this.http.get<Product[]>(environment.apiBaseUrl+'/getParticular/'+id);

  }

  public deleteProduct(id):Observable<Product[]>{

    return this.http.delete<Product[]>(environment.apiBaseUrl+'/deleteProduct/'+id);
  }


  public updateProduct(id,obj):Observable<Product[]>{
  
    console.log(obj);
    return this.http.patch<Product[]>(environment.apiBaseUrl+'/putProduct/'+id,obj);
  }

    
}