import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-menu-carousel',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './menu-carousel.component.html',
  styleUrl: './menu-carousel.component.scss'
})
export class MenuCarouselComponent {
  
}
