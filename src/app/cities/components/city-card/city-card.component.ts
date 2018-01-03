import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ow-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input() public city: any;
  @Input() public icon: any;
  public today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }
}
