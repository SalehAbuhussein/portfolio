import { ChangeDetectionStrategy, Component } from '@angular/core';
import { copy, links } from '../content';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container section" id="contact" aria-labelledby="contact-title">
      <div class="panel" appReveal>
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
    .panel {
      display: grid; justify-items: start; gap: 24px;
      padding: clamp(32px, 6vw, 72px); border-radius: 28px; color: #ffffff;
      background: linear-gradient(120deg, #c8102e, #6d28d9);
      box-shadow: var(--shadow);
    }
    h2 { font-size: clamp(2rem, 5.5vw, 3.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.035em; max-width: 18ch; text-wrap: balance; }
    .mail {
      display: inline-flex; align-items: center; min-height: 52px; padding-inline: 24px; border-radius: 999px;
      background: #ffffff; color: #16151d; font-weight: 800; text-decoration: none; overflow-wrap: anywhere;
      transition: transform 300ms var(--ease);
    }
    .mail:hover { transform: translateY(-2px) scale(1.02); }
    ul { display: flex; gap: 8px; }
    ul a {
      display: inline-flex; align-items: center; min-height: 44px; padding-inline: 16px; border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.5); font-weight: 700; text-decoration: none;
      transition: background-color 250ms ease-out;
    }
    ul a:hover { background: rgba(255, 255, 255, 0.15); }
    a:focus-visible { outline-color: #ffffff; }
  `,
})
export class Contact {
  protected readonly links = links;
  protected readonly copy = copy;
}
