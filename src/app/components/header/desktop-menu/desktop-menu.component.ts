import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DesktopMenuComponent {
  @Input() isDarkMode: boolean = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
}
