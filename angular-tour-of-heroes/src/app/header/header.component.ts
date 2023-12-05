import { Component } from '@angular/core';
import { Header } from './headermodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeroesComponent {
  hero: Header = {
    id: 1,
    name: 'Windstorm'
  };
}