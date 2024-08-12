import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'RK House',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'Daksh House',
      Type: 'Duplex House',
      Price: 120000,
    },
    {
      Id: 3,
      Name: 'Saru House',
      Type: 'Duplex House',
      Price: 120000,
    },
    {
      Id: 4,
      Name: 'Xyz House',
      Type: 'Duplex House',
      Price: 120000,
    },
    {
      Id: 5,
      Name: 'ABC House',
      Type: 'Duplex House',
      Price: 120000,
    },
    {
      Id: 6,
      Name: 'CCC House',
      Type: 'Duplex House',
      Price: 120000,
    },
    {
      Id: 7,
      Name: 'AAA House',
      Type: 'Duplex House',
      Price: 120000,
    },
    {
      Id: 8,
      Name: 'BBB House',
      Type: 'Duplex House',
      Price: 120000,
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
