import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorService {
  private hex = signal('000000');

  r = computed(() => parseInt(this.hex().substring(0, 2), 16));
  g = computed(() => parseInt(this.hex().substring(2, 4), 16));
  b = computed(() => parseInt(this.hex().substring(4, 6), 16));

  convertir(h: string) {
    this.hex.set(h.replace('#', ''));
  }
}