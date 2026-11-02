import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillGroups } from '../content';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="grid band" id="skills" aria-labelledby="skills-title">
      <h2 class="band-title" id="skills-title"><a href="#skills">Skills</a></h2>
      <div class="band-body">
        @for (g of groups; track g.title) {
          <h3>{{ g.title }}</h3>
          <ul class="cells">
            @for (item of g.items; track item) {
              <li>{{ item }}</li>
            }
            @for (n of filler(g.items.length); track $index) {
              <li aria-hidden="true"></li>
            }
          </ul>
        }
      </div>
    </section>
  `,
  styles: `
    h3 { font-size: 0.9375rem; font-weight: 700; margin: 0 0 12px; }
    h3:not(:first-child) { margin-top: 32px; }
    .cells {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border-top: 1px solid var(--rule);
      border-left: 1px solid var(--rule);
    }
    .cells li {
      padding: 14px 12px;
      border-right: 1px solid var(--rule);
      border-bottom: 1px solid var(--rule);
      font-weight: 600;
      font-size: 0.9375rem;
      line-height: 1.2;
    }
    @media (min-width: 760px) { .cells { grid-template-columns: repeat(5, 1fr); } }
  `,
})
export class Skills {
  protected readonly groups = skillGroups;
  // ponytail: pads to a multiple of 10 so rows close at both 2 and 5 columns
  protected filler(count: number) {
    return Array.from({ length: (10 - (count % 10)) % 10 });
  }
}
