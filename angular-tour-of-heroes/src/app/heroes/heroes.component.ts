import { Component } from '@angular/core';
//import { Hero } from './heroes/heromodel';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
export interface Hero {
  id: number;
  name: string;
}