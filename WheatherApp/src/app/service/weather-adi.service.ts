import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAdiService {

  private SERVER_URL = 'https://danepubliczne.imgw.pl/api/data/synop';
  constructor(private httpClient: HttpClient) { }

  public get(){
    // console.log('w serwisie : ' +this.httpClient.get(this.SERVER_URL));
    return this.httpClient.get(this.SERVER_URL);
  }


}
