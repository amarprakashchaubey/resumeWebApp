import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ACHIEVEMENTS, CERTIFICATES } from '../../data/portfolio.data';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionTitleComponent, CardComponent, MatIconModule, FadeInDirective],
  templateUrl: './certifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  protected readonly certificates = CERTIFICATES;
  protected readonly achievements = ACHIEVEMENTS;
}