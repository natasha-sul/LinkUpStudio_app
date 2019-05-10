import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.sass']
})
export class PopularProductsComponent implements OnInit {
  netImage: any = '../../img/Layer 5.png';
  constructor() { }

  ngOnInit() {
  }

}
