import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';
import { PROFILE } from '../../../data/portfolio.data';

export interface NavItem {
  label: string;
  /** In-page section id (URL hash) */
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly profile = PROFILE;

  protected readonly items: NavItem[] = [
    { label: 'Home', fragment: 'home' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Certifications', fragment: 'certifications' },
    { label: 'Academic', fragment: 'academic' },
  ];

  protected readonly sectionIds = this.items.map((i) => i.fragment);

  protected readonly activeSectionId = signal<string>('home');

  protected menuOpen = false;

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.closeMenu());

    afterNextRender(() => {
      const fromHash = globalThis.location?.hash?.replace('#', '') ?? '';
      if (fromHash && this.sectionIds.includes(fromHash)) {
        this.activeSectionId.set(fromHash);
      }

      const elements = this.sectionIds
        .map((id) => globalThis.document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      if (elements.length === 0) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const id = visible[0]?.target.id;
          if (id) {
            this.activeSectionId.set(id);
          }
        },
        { root: null, rootMargin: '-12% 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
      );
      for (const el of elements) {
        observer.observe(el);
      }
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }
}
