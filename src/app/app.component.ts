import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vnm-angular-app';

  finalDate = new Date('2019-08-31T12:30:00+0200');
  wedCountdown: {
    'days': number,
    'hours': number,
    'minutes': number,
    'seconds': number
  };

  constructor(){
    setInterval(() => {       
      this.wedCountdown = this.getWedCountDown(this.finalDate);
    }, 1000);
  }

  ngOnInit(){
  }

  getWedCountDown(finalDate: Date){
    let resultDate: Date;

    let t = finalDate.getTime() - new Date().getTime();
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