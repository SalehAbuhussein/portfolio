import { ChangeDetectionStrategy, Component, DOCUMENT, afterNextRender, inject, signal } from '@angular/core';
import { copy, links, profile } from './content';
import { CountUp } from './count-up';
import { Reveal } from './reveal';
import { About } from './sections/about';
import { Contact } from './sections/contact';
import { ExperienceSection } from './sections/experience';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  imports: [About, Skills, Projects, ExperienceSection, Contact, Reveal, CountUp],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly doc = inject(DOCUMENT);

  protected readonly profile = profile;
  protected readonly links = links;
  protected readonly copy = copy;
  protected readonly nameWords = profile.name.split(' ');
  protected readonly year = new Date().getFullYear();
  protected readonly theme = signal<Theme>('light');
  protected readonly nav = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];
  protected readonly stats = [
    { value: 3, suffix: '+', label: 'years of production Angular at Motory' },
    { value: 3, suffix: '', label: 'products rebuilt in Angular: Motory, Motory Shop and Mazad' },
    { value: 4, suffix: '', label: 'developers rebuilt the platform from jQuery' },
  ];

  constructor() {
    // The inline script in index.html already picked the theme; sync the signal with it.
    afterNextRender(() => this.theme.set(this.doc.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light'));
  }

  protected toggleTheme() {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.doc.documentElement.dataset['theme'] = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // storage blocked: the choice still applies for this visit
    }
  }
}
