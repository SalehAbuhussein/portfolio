import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Fades and lifts the element in when it scrolls into view. Optional delay in ms for staggering. */
@Directive({
  selector: '[appReveal]',
  host: { 'data-reveal': '', '[style.--delay.ms]': 'appReveal() || 0' },
})
export class Reveal {
  readonly appReveal = input<number | ''>(0);

  constructor() {
    const el = inject(ElementRef).nativeElement as HTMLElement;
    afterNextRender(() => {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.15 },
      );
      io.observe(el);
    });
  }
}
