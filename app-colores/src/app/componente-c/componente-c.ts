import { Component, inject, computed } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-componente-c',
  standalone: true,
  templateUrl: './componente-c.html',
  styleUrl: './componente-c.css'
})
export class ComponenteC {
  private servicio = inject(ColorService);

  colorRgb = computed(() =>
    `rgb(${this.servicio.r()}, ${this.servicio.g()}, ${this.servicio.b()})`
  );

  colorGris = computed(() => {
    const gris = Math.round(
      (this.servicio.r() + this.servicio.g() + this.servicio.b()) / 3
    );
    return `rgb(${gris}, ${gris}, ${gris})`;
  });
}