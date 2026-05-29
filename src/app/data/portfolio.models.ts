export interface SocialLink {
  label: string;
  url: string;
  /** Image under `/assets` (e.g. `/assets/github.svg`). When set, used instead of Material icon. */
  iconSrc?: string;
  /** Material icon ligature when `iconSrc` is omitted */
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  /** Material icon ligature name */
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface ProjectItem {
  name: string;
  /** Domain or category, e.g. Insurance & Finance */
  projectType: string;
  /** Engagement timeline, e.g. May 2024 — Present */
  period: string;
  details: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  year: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  detail?: string;
}

export interface PortfolioProfile {
  name: string;
  role: string;
  /** Personal greeting shown in the hero intro card */
  introCardMessage: string[];
  /** Navbar avatar — file under `/assets` (e.g. `profile-photo.jpg` or `.svg`). Replace with your photo. */
  profilePhotoSrc?: string;
  profileFaceSrc?: string;
  location?: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  githubUrl: string;
  resumePath: string;
  socialLinks: SocialLink[];
}
