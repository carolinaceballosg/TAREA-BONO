import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  standalone: true,
  templateUrl: './componente-b.html',
  styleUrl: './componente-b.css'
})
export class ComponenteB {
  @Input() nombre = '';
  @Input() valor = 0;
}