import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative', opacity: 0 }),
    animate('0.5s ease-out', style({ opacity: 1 })),
  ]),
]);
