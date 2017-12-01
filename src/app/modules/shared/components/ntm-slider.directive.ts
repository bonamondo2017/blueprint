import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { interval } from 'rxjs/observable/interval';

@Directive({
selector: 'mat-slider[ntm-slider]'
})

export class NtmSliderDirective{

  flagTimeline: boolean = false;
  number: number = null;

  constructor(private control : NgControl) {
  }
  @HostListener('keydown', ['$event']) 
  onEventNtm (event : KeyboardEvent){
    let number = Number(event.key);

    //Check if it is a number
    if(number < 0 ) 
      return false;

    if(this.flagTimeline){
      number = parseInt(this.number + '' + number);  
    }
    //Check the max value of the slider
    if(number > this.control.valueAccessor['max']){
      number = this.number;
    }

    this.createTimelineToListen();

    this.number = number;
    this.control.control.setValue(this.number);
  }

  /*
  * Creating a timeline to listen values of the keyboard
  */
  createTimelineToListen(){
    if(!this.flagTimeline){
      setTimeout(() => {
        this.flagTimeline = false;
      }, 700);
      this.flagTimeline = true;
    }
  }
}