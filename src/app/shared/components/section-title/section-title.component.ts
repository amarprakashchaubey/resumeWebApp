import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  private static nextId = 0;

  readonly titleId = `section-heading-${SectionTitleComponent.nextId++}`;

  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
  @Input() headingLevel: 'h1' | 'h2' | 'h3' = 'h2';
}