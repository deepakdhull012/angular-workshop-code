import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public log(msg: string) {
    console.log("log the message", msg);
  }
}
