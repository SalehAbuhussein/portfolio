import { ChangeDetectionStrategy, Component } from '@angular/core';
import { projectGroups } from '../content';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      @for (g of groups; track g.title) {
        <h3>{{ g.title }}</h3>
        <ul class="grid">
          @for (p of g.projects; track p.name) {
            <li class="card">
              <h4>
                @if (p.url) {
                  <a [href]="p.url" target="_blank" rel="noopener">{{ p.name }}</a>
                } @else {
                  {{ p.name }}
                }
              </h4>
              <p>{{ p.description }}</p>
            </li>
          }
        </ul>
      }
    </section>
  `,
  styles: `
    h3 { margin: 2rem 0 0.75rem; font-size: 1.1rem; color: var(--muted); }
    .grid { list-style: none; margin: 0; padding: 0; display: grid; gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); }
    .card { padding: 1.25rem; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); }
    h4 { margin: 0 0 0.5rem; font-size: 1.05rem; overflow-wrap: anywhere; }
    p { margin: 0; color: var(--muted); }
  `,
})
export class Projects {
  protected readonly groups = projectGroups;
}
