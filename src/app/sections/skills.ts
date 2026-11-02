import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillGroups } from '../content';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container section" id="skills" aria-labelledby="skills-title">
      <h2 class="section-title" id="skills-title" appReveal>Skills<span class="dot">.</span></h2>
      <div class="groups">
        @for (g of groups; track g.title; let i = $index) {
          <div class="card group" [appReveal]="i * 120">
            <h3>{{ g.title }}</h3>
            <ul>
              @for (item of g.items; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .groups { display: grid; gap: 16px; }
    @media (min-width: 900px) { .groups { grid-template-columns: repeat(3, 1fr); } }
    .group { padding: 28px; }
    h3 { font-size: 1.125rem; font-weight: 800; margin-bottom: 16px; }
    ul { display: flex; flex-wrap: wrap; gap: 8px; }
    li {
      padding: 6px 12px; border-radius: 999px; font-size: 0.875rem; font-weight: 600;
      border: 1px solid var(--border); background: var(--bg);
      transition: border-color 250ms ease-out, color 250ms ease-out, transform 300ms var(--ease);
    }
    li:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
  `,
})
export class Skills {
  protected readonly groups = skillGroups;
}
