import { ChangeDetectionStrategy, Component } from '@angular/core';
import { copy, education, profile } from '../content';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="grid band" id="about" aria-labelledby="about-title">
      <h2 class="band-title" id="about-title"><a href="#about">About</a></h2>
      <div class="band-body body">
        <p class="big">{{ copy.aboutLead }}</p>
        <p class="muted">{{ copy.aboutBody }} I live in {{ profile.location }}.</p>
        <dl>
          <dt>Education</dt>
          <dd>{{ education.degree }}, {{ education.school }}, {{ education.period }}</dd>
        </dl>
      </div>
    </section>
  `,
  styles: `
    .body { display: grid; gap: 20px; max-width: 68ch; }
    .big { font-size: clamp(1.25rem, 2.4vw, 1.625rem); font-weight: 700; line-height: 1.25; letter-spacing: -0.015em; }
    dl { margin: 8px 0 0; padding-top: 16px; border-top: 1px solid var(--rule); }
    dt { font-size: 0.8125rem; font-weight: 700; color: var(--red-ink); }
    dd { margin: 4px 0 0; }
  `,
})
export class About {
  protected readonly profile = profile;
  protected readonly education = education;
  protected readonly copy = copy;
}
