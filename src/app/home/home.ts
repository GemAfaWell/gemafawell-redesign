import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

interface Project {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly screenshotUrl: string;
  readonly webpUrl: string;
  readonly tags: readonly string[];
}

interface SkillCategory {
  readonly icon: string;
  readonly label: string;
  readonly skills: readonly string[];
}

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
})
export class HomeComponent {
  private readonly document = inject(DOCUMENT);

  protected readonly mobileMenuOpen = signal(false);
  protected readonly activeSection = signal('hero');

  protected readonly projects: readonly Project[] = [
    {
      title: 'Tri-State WebGems',
      description:
        'Full-service web development company — built and maintained from the ground up, showcasing services, portfolio, and team capabilities.',
      url: 'https://tristatewebgems.com',
      screenshotUrl: '/images/projects/tristatewebgems.png',
      webpUrl: '/images/projects/tristatewebgems.webp',
      tags: ['Company Site', 'Full Stack', 'Business'],
    },
    {
      title: 'Gemini Phoenix Music',
      description:
        'Musician website and upcoming app blending creative direction with technical execution for an independent artist.',
      url: 'https://geminiphoenixmusic.com',
      screenshotUrl: '/images/projects/geminiphoenixmusic.png',
      webpUrl: '/images/projects/geminiphoenixmusic.webp',
      tags: ['Music', 'Personal Brand', 'App'],
    },
    {
      title: 'ARose from Chaos Art Studio',
      description:
        'Digital illustrator portfolio with a custom gallery experience, showcasing original artwork for a professional creative.',
      url: 'https://arosefromchaos.art',
      screenshotUrl: '/images/projects/arosefromchaos.png',
      webpUrl: '/images/projects/arosefromchaos.webp',
      tags: ['Portfolio', 'Digital Art', 'Gallery'],
    },
  ];

  protected readonly skillCategories: readonly SkillCategory[] = [
    {
      icon: '</>',
      label: 'Development',
      skills: [
        'Next.js',
        'SvelteKit',
        'React Native',
        'MERN Stack',
        'Angular',
        'C#',
        'SQL',
        'PostgreSQL',
        'Python',
        'Bash',
      ],
    },
    {
      icon: '⚡',
      label: 'AI & Automation',
      skills: ['GitHub Copilot', 'Cursor', 'Gemini Code Assist', 'Claude Code', 'Bolt.new'],
    },
    {
      icon: '☁',
      label: 'Cloud',
      skills: ['AWS Lambda', 'AWS S3', 'Azure', 'SharePoint', '.NET'],
    },
    {
      icon: '⚙',
      label: 'CMS & E-Commerce',
      skills: ['WordPress', 'Shopify', 'Sanity'],
    },
    {
      icon: '♿',
      label: 'Accessibility',
      skills: ['WCAG 2.1', 'WCAG 2.2', 'Webhint', 'JAWS'],
    },
    {
      icon: '📈',
      label: 'SEO & Analytics',
      skills: ['SEMrush', 'Yoast', 'Google Analytics'],
    },
  ];

  constructor() {
    afterNextRender(() => {
      const sections = this.document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          }
        },
        { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' },
      );
      sections.forEach((section: Element) => observer.observe(section));
    });
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open: boolean) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
