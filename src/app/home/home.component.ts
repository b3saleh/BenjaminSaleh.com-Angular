import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('toggleBox', [
      // ...
      state('on', style({
        opacity: 1
      })),
      state('off', style({
        opacity: 0
      })),
      transition('on => off', [
        animate('0.5s')
      ]),
      transition('off => on', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {
  name = '';
  timer = 2;
  titles = ['Electrical Engineer', 'Musician', 'System Designer', 'Hair Dresser', 'Data Scientist', 'Frisbee Coach'];
  currentTitle = 'Electrical Engineer';
  iterator = 0;
  isOn = 1;

  constructor() { }

  ngOnInit(): void {
    this.utcTime();
  }

  utcTime(): void {
        setInterval(() => {
            if (this.timer <= 0) {
              this.switchTitle();
              this.timer = 2;
              this.isOn = 1;
            }
            else if (this.timer === 0.5){
              this.isOn = 0;
              this.timer -= 0.5;
              console.log('Turning off Text');
            } else {
              this.timer -= 0.5;
            }
        }, 500);
    }

  switchTitle(): void {
    this.iterator++;
    if (this.iterator >= this.titles.length) {
      this.iterator = 0;
    }
    this.currentTitle = this.titles[this.iterator];
  }
}
