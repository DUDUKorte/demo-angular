import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavOverviewComponent } from './sidenav-overview/sidenav-overview.component';
import { ButtonModule } from 'primeng/button'
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { MenuCarouselComponent } from './menu-carousel/menu-carousel.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavOverviewComponent,
    MenuNavbarComponent,
    ButtonModule,
    MenuCarouselComponent,
    FooterMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-delphi-proj';
}
