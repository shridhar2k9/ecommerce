import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Iconify from 'iconify-icon';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

}
