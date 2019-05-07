import { Component, OnInit } from '@angular/core';
import {SelectItemGroup} from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  selectedCar: string;

    groupedCars: SelectItemGroup[];
  constructor() { 

    this.groupedCars = [
      {
          label: 'qqq', 
          items: [
              {label: 'q', value: 'q'},
              {label: 'qq', value: 'qq'},
              {label: 'qqq', value: 'qqq'}
          ]
      },
      
  ];
  }

  ngOnInit() {
  }

}
