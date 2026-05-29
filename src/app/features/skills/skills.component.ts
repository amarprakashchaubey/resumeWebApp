import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { skillIconUrl } from '../../data/skill-icon-url';
import { SKILL_CATEGORIES } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent, MatIconModule, FadeInDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly categories = SKILL_CATEGORIES;

  protected iconSrc(label: string): string | undefined {
    return skillIconUrl(label);
  }
}
