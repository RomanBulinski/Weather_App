import {Component, OnInit} from '@angular/core';
import {WeatherAdiService} from "../service/weather-adi.service";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  stations = [];

  constructor( private weatherAdiService: WeatherAdiService) { }

  ngOnInit() {
    this.weatherAdiService.get().subscribe((data: any[])=>{
      // console.log(data);
      this.stations = data;
      console.log("w komponencie : " + this.products.length);
      console.log("w komponencie : " + this.products[1].stacja);
    });
  }

  // "id_stacji": "12295",
  // "stacja": "Białystok",
  // "data_pomiaru": "2020-07-19",
  // "godzina_pomiaru": "16",
  // "temperatura": "25",
  // "predkosc_wiatru": "1",
  // "kierunek_wiatru": "160",
  // "wilgotnosc_wzgledna": "54.0",
  // "suma_opadu": "0",
  // "cisnienie": "1015.7"

}
