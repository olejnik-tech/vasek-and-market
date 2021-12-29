import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  finalDate = new Date('2019-08-31 11:45:00');
  wedCountdown: {
    'days': number,
    'hours': number,
    'minutes': number,
    'seconds': number
  }={days:0,hours:0,minutes:0,seconds:0};

  constructor(){
    setInterval(() => {       
      this.wedCountdown = this.getWedCountDown(this.finalDate);
    }, 1000);
  }

  ngOnInit(){
  }

  getWedCountDown(finalDate: Date){
    let resultDate: Date;

    let t = new Date().getTime() - finalDate.getTime();
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    let hours = Math.floor( (t/(1000*60*60)) % 24 );
    let days = Math.floor( t/(1000*60*60*24) );

    return {
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
  }
}