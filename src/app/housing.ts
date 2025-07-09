import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Housing {

  url = "http://localhost:3000/locations";

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    // return this.housingLocationList;
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    // return this.housingLocationList.find(location => location.id === id);
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson =  await data.json() ?? {};
    return locationJson[0] ?? {};
  }

  submitApplication(firstName:string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}