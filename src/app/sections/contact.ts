import { ChangeDetectionStrategy, Component } from '@angular/core';
import { links } from '../content';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p>Email is the fastest way to reach me.</p>
      <p class="actions">
        <a class="btn btn-primary" [href]="'mailto:' + links.email">{{ links.email }}</a>
        <a class="btn" [href]="links.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn" [href]="links.github" target="_blank" rel="noopener">GitHub</a>
      </p>
    </section>
  `,
  styles: `
    p { margin: 0 0 1rem; color: var(--muted); }
  `,
})
export class Contact {
  protected readonly links = links;
}
