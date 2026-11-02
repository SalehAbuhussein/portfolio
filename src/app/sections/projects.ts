import { ChangeDetectionStrategy, Component } from '@angular/core';
import { projectGroups } from '../content';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="grid band" id="projects" aria-labelledby="projects-title">
      <h2 class="band-title" id="projects-title"><a href="#projects">Projects</a></h2>
      <ol class="band-body rows">
        @for (p of projects; track p.name; let i = $index) {
          <li [id]="p.name.toLowerCase()">
            <span class="idx" aria-hidden="true">{{ pad(i) }}</span>
            <div class="proj">
              <h3>
                @if (p.url) {
                  <a [href]="p.url" target="_blank" rel="noopener">
                    {{ p.name }}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
                      <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.75" />
                    </svg>
                    <span class="sr-only">(opens GitHub)</span>
                  </a>
                } @else {
                  {{ p.name }}
                }
              </h3>
              <p class="group">{{ p.group }}</p>
              <p class="desc muted">{{ p.description }}</p>
            </div>
          </li>
        }
      </ol>
    </section>
  `,
  styles: `
    .proj { display: grid; gap: 4px 24px; }
    h3 { font-size: clamp(1.125rem, 2.2vw, 1.375rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; overflow-wrap: anywhere; }
    h3 a { text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
    svg { flex: none; transition: transform 200ms ease-out; }
    h3 a:hover svg { transform: translate(2px, -2px); }
    .group { font-size: 0.8125rem; font-weight: 700; color: var(--red-ink); }
    .desc { max-width: 60ch; }
    @media (min-width: 720px) {
      .proj { grid-template-columns: 1fr 9rem; }
      .group { grid-column: 2; grid-row: 1; justify-self: end; padding-top: 0.3em; }
      .desc { grid-column: 1 / -1; }
    }
  `,
})
export class Projects {
  protected readonly projects = projectGroups.flatMap((g) => g.projects.map((p) => ({ ...p, group: g.title })));
  protected pad(i: number) {
    return String(i + 1).padStart(2, '0');
  }
}
