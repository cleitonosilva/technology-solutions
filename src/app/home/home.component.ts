import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { OpenPositionsComponent } from '../components/open-positions/open-positions.component';
import { ContactComponent } from '../components/contact/contact.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { ScrollTopButtonComponent } from '../components/scroll-top-button/scroll-top-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AboutUsComponent,
    OpenPositionsComponent,
    ContactComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    ScrollTopButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isDarkMode = false;

  toggleDarkMode(event: Event): void {
    this.isDarkMode = !this.isDarkMode;
    console.log('toggleDarkMode', this.isDarkMode);
  }
}
