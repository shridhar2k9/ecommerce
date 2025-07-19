import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer/footer.component";
import { NavigationComponent } from "../../../shared/navigation/navigation.component";
import { CartComponent } from "../../cart/cart.component";
import { ProductsComponent } from "../../products/products.component";
import Iconify from 'iconify-icon';

@Component({
  selector: 'app-homecomponent',
  standalone:true,
  imports: [HeaderComponent, FooterComponent, NavigationComponent, CartComponent, ProductsComponent],
  templateUrl: './homecomponent.component.html',
  styleUrl: './homecomponent.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomecomponentComponent {

}
