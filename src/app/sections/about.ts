import { ChangeDetectionStrategy, Component } from '@angular/core';
import { education, profile } from '../content';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>
        I am a frontend developer in {{ profile.location }}. At Motory I work in Angular, TypeScript, RxJS,
        Signals and SSR. On the side I build full-stack projects with ASP.NET Core and SQL Server.
      </p>
      <p class="edu">
        <strong>{{ education.school }}</strong><br />
        {{ education.degree }}, {{ education.period }}
      </p>
    </section>
  `,
  styles: `
    p { max-width: 65ch; margin: 0 0 1rem; color: var(--muted); }
    .edu { color: var(--text); }
  `,
})
export class About {
  protected readonly profile = profile;
  protected readonly education = education;
}
