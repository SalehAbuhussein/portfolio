import { ChangeDetectionStrategy, Component } from '@angular/core';
import { projectGroups } from '../content';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container section" id="projects" aria-labelledby="projects-title">
      <h2 class="section-title" id="projects-title" appReveal>Projects<span class="dot">.</span></h2>
      <ul class="grid">
        @for (p of projects; track p.name; let i = $index) {
          <li class="card proj" [id]="p.name.toLowerCase()" [appReveal]="(i % 3) * 100">
            <p class="tag">{{ p.group }}</p>
            <h3>
              @if (p.url) {
                <a [href]="p.url" target="_blank" rel="noopener">
                  {{ p.name }}<span class="sr-only"> (opens GitHub)</span>
                </a>
              } @else {
                {{ p.name }}
              }
            </h3>
            <p class="muted">{{ p.description }}</p>
            @if (p.url) {
              <svg class="arrow" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
                <path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            }
          </li>
        }
      </ul>
    </section>
  `,
  styles: `
    .grid { display: grid; gap: 16px; }
    @media (min-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1000px) { .grid { grid-template-columns: repeat(3, 1fr); } }
    .proj { position: relative; display: grid; align-content: start; gap: 8px; padding: 28px; }
    .tag {
      justify-self: start; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 999px;
      color: var(--accent); background: color-mix(in srgb, var(--accent) 12%, transparent);
    }
    h3 { font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em; line-height: 1.25; overflow-wrap: anywhere; padding-right: 28px; }
    h3 a { text-decoration: none; }
    /* the whole card is the click target */
    h3 a::after { content: ''; position: absolute; inset: 0; border-radius: inherit; }
    .arrow { position: absolute; top: 28px; right: 24px; color: var(--muted); transition: transform 350ms var(--ease), color 250ms ease-out; }
    .proj:hover .arrow { transform: translate(3px, -3px); color: var(--accent); }
  `,
})
export class Projects {
  protected readonly projects = projectGroups.flatMap((g) => g.projects.map((p) => ({ ...p, group: g.title })));
}
