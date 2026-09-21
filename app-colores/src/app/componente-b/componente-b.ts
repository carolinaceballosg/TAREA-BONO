import { Component, input, inject, computed } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-componente-b',
  standalone: true,
  templateUrl: './componente-b.html',
  styleUrl: './componente-b.css'
})
export class ComponenteB {
  canal = input.required<string>();
  private servicio = inject(ColorService);
  valor = computed(() => {
    switch (this.canal()) {
      case 'R': return this.servicio.r();
      case 'G': return this.servicio.g();
      case 'B': return this.servicio.b();
      default:  return 0;
    }
  });
}