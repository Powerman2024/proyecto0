import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
    <br>
    <h1>Contador: {{counter}}</h1>
    <br>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="buttonReset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    <hr>
  `
})

export class CounterComponent{

  public counter: number = 10;

  increaseBy(value: number):void{
    // this.counter = this.counter + 1;
    this.counter += value;
  }

  buttonReset():void{
    this.counter = 10;
  }


};
