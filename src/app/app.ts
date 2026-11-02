import { ChangeDetectionStrategy, Component } from '@angular/core';
import { copy, links, profile } from './content';
import { About } from './sections/about';
import { Contact } from './sections/contact';
import { ExperienceSection } from './sections/experience';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';

@Component({
  selector: 'app-root',
  imports: [About, Skills, Projects, ExperienceSection, Contact],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly profile = profile;
  protected readonly links = links;
  protected readonly copy = copy;
  protected readonly firstName = profile.name.split(' ')[0];
  protected readonly lastName = profile.name.split(' ').slice(1).join(' ');
  protected readonly year = new Date().getFullYear();
  protected readonly nav = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];
}
