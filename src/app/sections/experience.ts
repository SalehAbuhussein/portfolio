import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experience } from '../content';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <section id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <ol>
          @for (e of items; track e.role + e.company + e.period) {
            <li>
              <h3>{{ e.role }}, {{ e.company }}</h3>
              <p class="period">{{ e.period }}</p>
              <ul>
                @for (h of e.highlights; track h) {
                  <li>{{ h }}</li>
                }
              </ul>
            </li>
          }
        </ol>
      </section>
  `,
  styles: `
    ol { list-style: none; margin: 0; padding: 0 0 0 1.25rem; border-left: 2px solid var(--border); }
    ol > li { position: relative; padding-bottom: 2rem; }
    ol > li:last-child { padding-bottom: 0; }
    ol > li::before { content: ''; position: absolute; left: calc(-1.25rem - 6px); top: 0.5rem;
      width: 10px; height: 10px; border-radius: 50%; background: var(--accent); }
    h3 { margin: 0; font-size: 1.1rem; }
    .period { margin: 0.25rem 0 0.75rem; color: var(--muted); font-size: 0.9rem; }
    ul { margin: 0; padding-left: 1.25rem; color: var(--muted); }
    ul li { margin-bottom: 0.35rem; }
  `,
})
export class ExperienceSection {
  protected readonly items = experience;
}
