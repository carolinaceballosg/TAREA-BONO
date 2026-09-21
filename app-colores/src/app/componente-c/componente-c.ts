import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-componente-c',
  standalone: true,
  templateUrl: './componente-c.html'
})
export class ComponenteC implements OnChanges {
  @Input() r = 0;
  @Input() g = 0;
  @Input() b = 0;

  colorRgb = 'rgb(0,0,0)';
  colorGris = 'rgb(0,0,0)';

  ngOnChanges() {
    this.colorRgb = `rgb(${this.r}, ${this.g}, ${this.b})`;

    const gris = Math.round((this.r + this.g + this.b) / 3);
    this.colorGris = `rgb(${gris}, ${gris}, ${gris})`;
  }
}