import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experience } from '../content';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="grid band" id="experience" aria-labelledby="experience-title">
      <h2 class="band-title" id="experience-title"><a href="#experience">Experience</a></h2>
      <ol class="band-body rows">
        @for (job of jobs; track job.role; let i = $index) {
          <li>
            <span class="idx" aria-hidden="true">{{ pad(i) }}</span>
            <div class="job">
              <h3>{{ job.role }}, {{ job.company }}</h3>
              <p class="period muted">{{ job.period }}</p>
              <ul>
                @for (h of job.highlights; track h) {
                  <li>{{ h }}</li>
                }
              </ul>
            </div>
          </li>
        }
      </ol>
    </section>
  `,
  styles: `
    .job { display: grid; gap: 8px; }
    .period { font-size: 0.875rem; font-weight: 600; }
    h3 { font-size: clamp(1.25rem, 2.4vw, 1.5rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.15; }
    @media (min-width: 720px) {
      .job { grid-template-columns: 1fr auto; column-gap: 24px; }
      h3 { grid-row: 1; }
      .period { grid-column: 2; grid-row: 1; justify-self: end; padding-top: 0.3em; }
      ul { grid-column: 1 / -1; }
    }
    ul { display: grid; gap: 6px; max-width: 68ch; margin-top: 4px; }
    ul li { padding-left: 18px; position: relative; color: var(--ink-2); }
    ul li::before { content: ''; position: absolute; left: 0; top: 0.72em; width: 8px; height: 2px; background: var(--red); }
  `,
})
export class ExperienceSection {
  protected readonly jobs = experience;
  protected pad(i: number) {
    return String(i + 1).padStart(2, '0');
  }
}
