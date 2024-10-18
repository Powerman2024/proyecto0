import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Henry";
  public age: Number = 54;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

   getHeroDescription(): string{
     return `${this.name} - ${this.age}`;
   }

   changeHero():void {
    this.name = "Nicolas";
   }

   changeAge():void {
    this.age = 35;
   }

   resetForm():void{
    this.name = "Henry";
    this.age = 54;
  }



}
