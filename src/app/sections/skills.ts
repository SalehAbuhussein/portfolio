import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillIcons, skillTags } from '../content';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <ul class="icons">
        @for (s of icons; track s.id) {
          <li>
            <img [src]="s.iconUrl" [alt]="s.label" width="48" height="48" loading="lazy" />
            <span>{{ s.label }}</span>
          </li>
        }
      </ul>
      <ul class="tags">
        @for (t of tags; track t) {
          <li>{{ t }}</li>
        }
      </ul>
    </section>
  `,
  styles: `
    ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.75rem; }
    .icons li { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; width: 5rem;
      font-size: 0.8rem; color: var(--muted); text-align: center; }
    .icons img { border-radius: var(--radius); }
    .tags { margin-top: 2rem; }
    .tags li { padding: 0.25rem 0.75rem; border: 1px solid var(--border); border-radius: 999px;
      background: var(--surface); font-size: 0.9rem; }
  `,
})
export class Skills {
  protected readonly icons = skillIcons;
  protected readonly tags = skillTags;
}
