import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    ButtonModule
  ],
  templateUrl: './menu-navbar.component.html',
  styleUrl: './menu-navbar.component.scss'
})
export class MenuNavbarComponent {
  
}
