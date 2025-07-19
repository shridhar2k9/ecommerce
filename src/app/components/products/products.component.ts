import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
})
export class ProductsComponent implements OnInit {
public productsService = inject(ProductService)
ngOnInit(): void {
  this.productsService.getProducts();
  console.log("defered is loading")
}
}
