import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.scss'],
})
export class ScrollTopButtonComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showButton = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
