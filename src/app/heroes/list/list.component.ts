import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Superman', 'Acuaman', 'Batman', 'Centella'];
  public deletedHeroe?: string;
   //public newHero: string = '';

  removeUltimoHeroe(): void {
    this.deletedHeroe = this.heroNames.pop();
    //console.log({ deletedHeroe });
  }

  //  addHeroe(): void {
  //    if (this.newHero.trim().length > 0) {
  //      this.heroNames.push(this.newHero);  // Agregar el nuevo héroe
  //      this.newHero = '';  // Limpiar el campo de entrada después de agregar
  //      }
  //    }
  }




