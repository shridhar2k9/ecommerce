import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { cartItems } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 products:cartItems={
  userId:1,
  products:[]
 };
  constructor(private http:HttpClient) {
   }
public cartItems = signal({})
  addToCart(id:number){
    const url='https://dummyjson.com/carts/add';
      this.products.products.push({id:id,quantity:1})
      const body = this.products
    
    this.http.post(url,body,{headers : new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(res=>{
      this.cartItems.set(res)
    })

  }
}
