import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Counts from 0 up to the target number the first time it scrolls into view. Prerendered HTML shows the final value. */
@Directive({ selector: '[appCountUp]' })
export class CountUp {
  readonly appCountUp = input.required<number>();

  constructor() {
    const el = inject(ElementRef).nativeElement as HTMLElement;
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const target = this.appCountUp();
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1400, 1);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 4))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
      io.observe(el);
    });
  }
}
