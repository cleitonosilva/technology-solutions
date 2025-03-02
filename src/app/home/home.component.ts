import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { OpenPositionsComponent } from '../components/open-positions/open-positions.component';
import { ContactComponent } from '../components/contact/contact.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

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
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
