export interface Profile {
  name: string;
  headline: string;
  location: string;
  intro: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  /** Omitted when there is no public repo. */
  url?: string;
}

export interface ProjectGroup {
  title: string;
  projects: Project[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Links {
  github: string;
  linkedin: string;
  email: string;
}

export const profile: Profile = {
  name: 'Saleh Abuhussein',
  headline: 'Angular frontend developer',
  location: 'Amman, Jordan',
  intro:
    'I work on the frontend at Motory, an automotive marketplace. I was one of four developers who rebuilt its jQuery platform in Angular. I built the multi-criteria filtering system used across the platform, and cut image payload on Mazad by 80% to improve LCP.',
};

export const copy = {
  netClaim: 'I also build back ends with ASP.NET Core and SQL Server, on databases I design by hand.',
  aboutLead: 'I build Angular apps for Motory, an automotive marketplace, and I like owning the whole path from database table to rendered page.',
  aboutBody: 'At Motory I work in Angular, TypeScript, RxJS and Signals. On the side I build full-stack projects with ASP.NET Core and SQL Server.',
  contactTitle: "Hiring for Angular or full-stack .NET? Let's talk.",
};

export const education: Education = {
  school: 'Balqa University',
  degree: "Bachelor's degree, Computer Engineering",
  period: '2018 to 2023',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'Angular SSR', 'Angular Material', 'Storybook', 'HTML', 'CSS / Sass', 'JavaScript'],
  },
  {
    title: 'Back end',
    items: ['C#', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'ADO.NET', 'Firebase'],
  },
  {
    title: 'Testing and team',
    items: ['Jasmine', 'Vitest', 'Git', 'Bitbucket', 'Jira', 'Agile / Scrum'],
  },
];

const gh = (repo: string) => `https://github.com/SalehAbuhussein/${repo}`;

export const projectGroups: ProjectGroup[] = [
  {
    title: 'Full-stack',
    projects: [
      {
        name: 'Clinic-Management-System',
        url: gh('Clinic-Management-System'),
        description:
          'Appointments, visits and clinical records. Angular front end (signals, Material 3) with an ASP.NET Core 8 API using raw ADO.NET.',
      },
    ],
  },
  {
    title: 'Angular',
    projects: [
      {
        name: 'Angular-Material-Storybook',
        url: gh('Angular-Material-Storybook'),
        description: 'Angular Material components documented in Storybook.',
      },
      {
        name: 'Angular-Movies',
        url: gh('Angular-Movies'),
        description: 'A movie browsing app.',
      },
    ],
  },
  {
    title: '.NET desktop',
    projects: [
      {
        name: 'Car-Rental-System',
        url: gh('Car-Rental-System'),
        description: 'Managing cars and rentals (C#, .NET).',
      },
      {
        name: 'Cafe-POS',
        url: gh('Cafe-POS'),
        description: 'A point-of-sale application for a cafe (C#, .NET).',
      },
      {
        name: 'DVLD',
        description:
          'A Driving & Vehicle License Department application for license applications, tests and issuing (C#, .NET).',
      },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: 'Front End Developer (Angular)',
    company: 'Motory',
    period: 'Oct 2023 to present',
    highlights: [
      'Rebuilt the legacy jQuery platform in Angular with a team of four: Motory, Motory Shop and Mazad.',
      'Built a reusable multi-criteria filtering system used across several pages.',
      'Cut image payload on the Mazad landing page by 80% with priority hints and lazy loading, improving LCP.',
      'Connected Firebase Realtime Database to the Mazad auction pages for live updates.',
      'Introduced Signals to the team and mentor new developers and interns.',
    ],
  },
  {
    role: 'PHP Web Developer',
    company: 'Motory',
    period: 'Feb 2023 to Oct 2023',
    highlights: ['Developed and maintained web application features in PHP with Yii2.'],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'Programming Advices',
    period: 'Feb 2023 to Jul 2026 (completed)',
    highlights: [
      'Completed a 24-course roadmap covering C#, OOP, data structures, SQL Server, ADO.NET, ASP.NET Core API security and Windows Services.',
      'Built desktop apps including DVLD and a car rental management system.',
    ],
  },
];

export const links: Links = {
  github: 'https://github.com/SalehAbuhussein',
  linkedin: 'https://www.linkedin.com/in/saleh-abuhussein/',
  email: 'salehabuhussein2@gmail.com',
};
