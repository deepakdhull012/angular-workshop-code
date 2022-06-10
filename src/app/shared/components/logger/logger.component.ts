import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("Logger ---> Constructor")
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log("Logger ---> ngOnChanges")
   }


  ngOnInit(): void {
    console.log("Logger ---> ngOnInit")
  }

  ngDoCheck(): void {
    console.log("Logger ---> ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("Logger ---> ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("Logger ---> ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("Logger ---> ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("Logger ---> ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("Logger ---> ngOnDestroy")
  }

}
