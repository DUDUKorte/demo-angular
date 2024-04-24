import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sidenav-overview',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  templateUrl: './sidenav-overview.component.html',
  styleUrl: './sidenav-overview.component.scss'
})
export class SidenavOverviewComponent {
  showFiller = false;
}
