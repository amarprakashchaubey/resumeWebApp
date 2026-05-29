import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EDUCATION } from '../../data/portfolio.data';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [SectionTitleComponent, CardComponent, MatIconModule, FadeInDirective],
  templateUrl: './academic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademicComponent {
  protected readonly education = EDUCATION;
}