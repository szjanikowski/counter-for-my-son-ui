import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	startStop = 'START'
	roundReset = 'RUNDA'
  hundreds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;
  ngOnInit(){
    let timer = Observable.timer(0, 10);
    timer.subscribe(()=>{ 
    	this.hundreds += 1;
    	if(this.hundreds == 100) {
    		this.seconds += 1;
    		this.hundreds = 0;
    	}
    	if(this.seconds == 60) {
    		this.minutes += 1
    		this.seconds = 0;
    	}
    	if(this.minutes == 60) {
    		this.hours += 1
    		this.minutes = 0;
    	}
    	if(this.hours == 24) {
    		this.days += 1
    		this.hours = 0;
    	}
    });
  }
}
