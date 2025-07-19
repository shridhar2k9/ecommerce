import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
public products  = new BehaviorSubject<any[]>([]);
public products$ = this.products.asObservable();

// Signal implementation
public productsSignal = signal<any[]>([])

  constructor(private http:HttpClient) {
   }

   getProducts(){
    this.http.get('https://dummyjson.com/products').subscribe((res:any)=>{
      this.products.next(res.products);
      this.productsSignal.set(res.products);
    })
   }
}
