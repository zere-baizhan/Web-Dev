import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import {CommonModule} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule,CommonModule],
  template: `
  <section class="listing">
  <img
    class="listing-photo"
    [src]="housingLocation.photo"
    alt="Exterior photo of {{ housingLocation.name }}"
    crossorigin
  />
  <h2 class="listing-heading">{{ housingLocation.name }}</h2>
  <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
</section>

<a [routerLink]="['/details', housingLocation.id]" class="learn-more">
  Learn More >
</a>

  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
    @Input() housingLocation! : HousingLocation;
}