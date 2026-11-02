import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experience } from '../content';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container section" id="experience" aria-labelledby="experience-title">
      <h2 class="section-title" id="experience-title" appReveal>Experience<span class="dot">.</span></h2>
      <ol class="timeline">
        @for (job of jobs; track job.role; let i = $index) {
          <li [appReveal]="i * 100">
            <p class="period">{{ job.period }}</p>
            <h3>{{ job.role }}</h3>
            <p class="company">{{ job.company }}</p>
            <ul>
              @for (h of job.highlights; track h) {
                <li>{{ h }}</li>
              }
            </ul>
          </li>
        }
      </ol>
    </section>
  `,
  styles: `
    .timeline { position: relative; display: grid; gap: 40px; padding-left: 28px; }
    .timeline::before {
      content: ''; position: absolute; left: 5px; top: 8px; bottom: 8px; width: 2px;
      background: linear-gradient(var(--accent), var(--accent-2), transparent);
    }
    .timeline > li { position: relative; }
    .timeline > li::before {
      content: ''; position: absolute; left: -28px; top: 6px; width: 12px; height: 12px; border-radius: 50%;
      background: var(--bg); border: 2px solid var(--accent);
    }
    .period { font-size: 0.875rem; font-weight: 700; color: var(--accent); }
    h3 { font-size: clamp(1.25rem, 2.6vw, 1.625rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; margin-top: 4px; }
    .company { font-weight: 600; color: var(--muted); margin-bottom: 12px; }
    ul { display: grid; gap: 8px; max-width: 70ch; }
    ul li { color: var(--muted); padding-left: 18px; position: relative; }
    ul li::before { content: ''; position: absolute; left: 0; top: 0.7em; width: 6px; height: 6px; border-radius: 50%; background: var(--accent-2); }
  `,
})
export class ExperienceSection {
  protected readonly jobs = experience;
}
