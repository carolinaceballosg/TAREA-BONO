import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-componente-a',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente-a.html',
  styleUrl: './componente-a.css'
})
export class ComponenteA {
  private servicio = inject(ColorService);
  hex = new FormControl('', { nonNullable: true });

  mostrar() {
    this.servicio.convertir(this.hex.value);
  }
}