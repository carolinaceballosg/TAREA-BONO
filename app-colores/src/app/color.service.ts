import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorService {

  private hexSignal = signal('000000');

  readonly r = computed(() => parseInt(this.hexSignal().substring(0, 2), 16));
  readonly g = computed(() => parseInt(this.hexSignal().substring(2, 4), 16));
  readonly b = computed(() => parseInt(this.hexSignal().substring(4, 6), 16));

  convertir(hex: string) {
    hex = hex.replace('#', '');
    this.hexSignal.set(hex);
  }
}