import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavOverviewComponent } from './sidenav-overview/sidenav-overview.component';
import { ButtonModule } from 'primeng/button'
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavOverviewComponent,
    MenuNavbarComponent,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-delphi-proj';
}
