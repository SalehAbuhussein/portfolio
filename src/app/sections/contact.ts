import { ChangeDetectionStrategy, Component } from '@angular/core';
import { copy, links } from '../content';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="field" id="contact" aria-labelledby="contact-title">
      <div class="grid inner">
        <h2 id="contact-title">{{ copy.contactTitle }}</h2>
        <a class="mail" [href]="'mailto:' + links.email">{{ links.email }}</a>
        <ul>
          <li><a [href]="links.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a [href]="links.github" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </div>
    </section>
  `,
  styles: `
    .field { background: var(--red); color: var(--on-red); }
    .inner { padding-block: clamp(56px, 10vw, 120px); row-gap: 28px; }
    h2, .mail, ul { grid-column: 1 / -1; }
    h2 { font-size: clamp(2rem, 6vw, 4rem); font-weight: 900; font-stretch: 108%; line-height: 0.95; letter-spacing: -0.035em; max-width: 16ch; text-wrap: balance; }
    .mail { justify-self: start; font-size: clamp(1.125rem, 3vw, 1.75rem); font-weight: 700; text-decoration-color: currentColor; text-decoration-thickness: 2px; overflow-wrap: anywhere; }
    a { text-decoration-color: currentColor; }
    a:hover { color: inherit; text-decoration-thickness: 3px; }
    ul { display: flex; gap: 24px; font-weight: 700; }
    ul a { display: inline-flex; align-items: center; min-height: 44px; }
    a:focus-visible { outline-color: var(--ink); }
    ::selection { background: var(--ink); color: var(--paper); }
  `,
})
export class Contact {
  protected readonly links = links;
  protected readonly copy = copy;
}
