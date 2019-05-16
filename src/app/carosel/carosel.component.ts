import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.sass']
})

export class CaroselComponent implements OnInit {
  account: any[];



  feedbacks = [
    // tslint:disable-next-line:max-line-length
    {id: 0, feedback: 'I have been incredibly impressed with LinkUp team of developers. They worked hard to deliver the highest-quality product possibleand exceeded my expectations at every step of the way. I initially found Andriy in search of a better price than what I could find locally with other development firms. But what I found - in addition to a better price - was a much higher-quality product as well, in every way: service, design, development, communications...etc. 5+++ Stars work. Great job.' ,  name: 'Johm Kammon', position: 'Wholesum Founder'},
    // tslint:disable-next-line:max-line-length
    {id: 1, feedback: 'Loved working with LinkUp. Great guys, developers, and management. They knew how to do the job, in the most professional way.',  name: 'Adam Frank', position: 'Lorem Ipsum'},
    // tslint:disable-next-line:max-line-length
    {id: 3, feedback: 'Nice company willing to work and get educated at he same time. Ready to face any challenges and very friendly with customers. hey quote very humbly and every invoice can be discussed well in advance. We made a custom design web shop with them and keep on cooperating on development and maintenance. Highly recommended.',  name: 'Oleh Zavadsky', position: 'Lorem Ipsum'},
    {id: 4, feedback: '444',  name: '444', position: '444'},
    {id: 4, feedback: '555',  name: '555', position: '555'},
    {id: 4, feedback: '666',  name: '666', position: '666'},
  ];
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navContainer: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
};

  constructor() { }

  ngOnInit() {
  }

}
