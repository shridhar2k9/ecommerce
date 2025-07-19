import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, SimpleChanges } from '@angular/core';
import Iconify from 'iconify-icon';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnChanges {
  items:any;
constructor(private cartService:CartService){
}
ngOnChanges(changes: SimpleChanges): void {
  this.items = this.cartService.cartItems();
}
}
