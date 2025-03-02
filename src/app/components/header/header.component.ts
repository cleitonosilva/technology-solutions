import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DesktopMenuComponent,
    MobileMenuComponent
  ]
})
export class HeaderComponent {
  @Input() isDarkMode = false;
  @Output() toggleDarkMode = new EventEmitter<any>();

  onToggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.toggleDarkMode.emit(this.isDarkMode);
  }
}
