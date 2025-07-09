import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocation],
  template: `
    <section>
    <form (submit)="onSubmit($event, filter.value)">
      <input type = "text" placeholder = "Filter by City" id="filter" #filter />
      <button class="primary" type= "button" (click)="filterResults(filter.value)">Search</button>  
    </form>
    </section>
    <section class = "results">
      <!-- <app-housing-location [housingLocation]="housingLocation"></app-housing-location> -->
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList" [housingLocation] = "housingLocation">
      </app-housing-location>
    </section>
  `,
  // styles: ``,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'homes';
  
  housingService: Housing = inject(Housing);
  housingLocationList : HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => 
          housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  onSubmit(event: Event, value: string) {
    event.preventDefault();
    this.filterResults(value);
  }

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then(
        (housingLocationList: HousingLocationInfo[]) => {
          this.housingLocationList = housingLocationList;
          this.filteredLocationList = this.housingLocationList;
        }
      );
  }
}
