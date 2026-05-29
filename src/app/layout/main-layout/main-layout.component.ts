import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, fromEvent } from 'rxjs';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MatMiniFabButton, MatIconModule],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  protected readonly showScrollTop = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    fromEvent(window, 'scroll', { passive: true })
      .pipe(debounceTime(80), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.showScrollTop.set(window.scrollY > 420));
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}