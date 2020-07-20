import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = '';
  timer = 2;
  titles = ['Electrical Engineer', 'Data Scientist', 'Hair Dresser', 'Songwriter', 'Guitarist'];
  currentTitle = 'Electrical Engineer';
  iterator = 0;

  constructor() { }

  ngOnInit(): void {
    this.utcTime();
  }

  utcTime(): void {
        setInterval(() => {
            if (this.timer <= 0){
              this.switchTitle();
              this.timer = 2;
            } else {
              this.timer--;
            }
        }, 1000);
    }

  switchTitle(): void {
    this.iterator++;
    if (this.iterator >= this.titles.length) {
      this.iterator = 0;
    }
    this.currentTitle = this.titles[this.iterator];
  }
}
