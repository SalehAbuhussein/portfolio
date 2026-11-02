import { ChangeDetectionStrategy, Component } from '@angular/core';
import { copy, education, profile } from '../content';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container section" id="about" aria-labelledby="about-title">
      <h2 class="section-title" id="about-title" appReveal>About<span class="dot">.</span></h2>
      <div class="body" [appReveal]="100">
        <p class="big">{{ copy.aboutLead }}</p>
        <p class="muted">{{ profile.intro }}</p>
        <p class="muted">{{ copy.aboutBody }} I live in {{ profile.location }}.</p>
        <p class="edu card">
          <span class="label">Education</span>
          {{ education.degree }}, {{ education.school }}, {{ education.period }}
        </p>
      </div>
    </section>
  `,
  styles: `
    .body { display: grid; gap: 20px; max-width: 70ch; }
    .big { font-size: clamp(1.375rem, 3vw, 1.875rem); font-weight: 700; line-height: 1.3; letter-spacing: -0.02em; }
    .edu { display: grid; gap: 4px; padding: 20px 24px; margin-top: 8px; }
    .label { font-size: 0.8125rem; font-weight: 700; color: var(--accent); }
  `,
})
export class About {
  protected readonly profile = profile;
  protected readonly education = education;
  protected readonly copy = copy;
}
