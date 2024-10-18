import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero.component";
import { ListComponent } from "../list/list.component";
import { FormsModule } from "@angular/forms";



@NgModule({

declarations: [
  HeroComponent,
  ListComponent,
],
exports:[
  HeroComponent,
  ListComponent,
  FormsModule

],
imports:[
  CommonModule
]
})

export class HeroModule{


};
