import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './menu-navbar.component.html',
  styleUrl: './menu-navbar.component.scss'
})
export class MenuNavbarComponent {
  
}
