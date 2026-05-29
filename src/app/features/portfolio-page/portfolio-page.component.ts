import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AcademicComponent } from '../academic/academic.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ExperienceComponent } from '../experience/experience.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    AcademicComponent,
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPageComponent {}
