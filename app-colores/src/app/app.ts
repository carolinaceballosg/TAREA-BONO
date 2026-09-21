import { Component } from '@angular/core';
import { ComponenteA } from './componente-a/componente-a';
import { ComponenteB } from './componente-b/componente-b';
import { ComponenteC } from './componente-c/componente-c';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteA, ComponenteB, ComponenteC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  r = 0;
  g = 0;
  b = 0;

  recibirHex(hex: string) {
    hex = hex.replace('#', '');
    this.r = parseInt(hex.substring(0, 2), 16);
    this.g = parseInt(hex.substring(2, 4), 16);
    this.b = parseInt(hex.substring(4, 6), 16);
  }
}