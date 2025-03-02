import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slides } from '../../data/slide';
import { CarouselSlide } from '../../models/slide';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit {
  slides: CarouselSlide[] = Slides;

  ngOnInit(): void {
  }

}
