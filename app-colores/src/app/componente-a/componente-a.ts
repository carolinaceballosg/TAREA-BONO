import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-a',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente-a.html'
})
export class ComponenteA {
  @Output() enviar = new EventEmitter<string>();

  hex = new FormControl('', { nonNullable: true });

  mostrar() {
    this.enviar.emit(this.hex.value);
  }
}