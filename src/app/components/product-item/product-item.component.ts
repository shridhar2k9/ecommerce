import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Iconify from 'iconify-icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  inputs:['product']
})
export class ProductItemComponent implements OnInit{
product:any;

constructor(private cartService:CartService){}

ngOnInit(): void {
  console.log("product item initiated")
}
addCart(id:number):void{
  this.cartService.addToCart(id)
}
}
