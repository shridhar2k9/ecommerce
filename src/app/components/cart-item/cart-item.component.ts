import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
  inputs:['cartItems'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnChanges {
constructor(private cartService:CartService){
  
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(this.cartService.cartItems())
}
}
