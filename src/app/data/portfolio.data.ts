import type {
  AchievementItem,
  CertificateItem,
  EducationItem,
  ExperienceItem,
  PortfolioProfile,
  ProjectItem,
  SkillCategory,
} from './portfolio.models';

export const PROFILE: PortfolioProfile = {
  name: 'Amar Prakash Chaubey',
  role: 'Full Stack Developer',
  introCardMessage: ["I’m Amar, a Full Stack Developer who survives on caffeine, stack traces, and unrealistic deadlines.",
    "With 4+ years of experience in Angular and .NET Core, I build applications that are fast, scalable, and mostly bug-free (the remaining bugs are called future enhancements).",
    "From designing responsive UIs to optimizing SQL queries, I enjoy creating systems that users love and servers tolerate.",
    "Recently exploring AI technologies as well — because surviving in tech now apparently requires coding, debugging, cloud knowledge, and teaching machines how to think.",
    "Currently learning and experimenting with AI-powered applications, automation, and smart integrations to upgrade my skills before AI officially starts reviewing my pull requests."
  ],
  profilePhotoSrc: '/assets/amar_profile_image.jpeg',
  profileFaceSrc: '/assets/amar_facepile.jpeg',
  location: 'Noida, India',
  email: 'amarprakashchaubey@outlook.com',
  phone: '+91 8527063318',
  linkedInUrl: 'https://www.linkedin.com/in/amar-prakash-chaubey/',
  githubUrl: 'https://github.com/amarprakashchaubey',
  resumePath: '/assets/amarprakash_fullstack_6year.pdf',
  socialLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/amarprakashchaubey',
      iconSrc: '/assets/git-icon.png',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amar-prakash-chaubey/',
      iconSrc: '/assets/linkedin-icon.png',
    },
    { label: 'Email', url: 'mailto:amarprakashchaubey@outlook.com', icon: 'mail' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'palette',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'NgRx',
      'RxJS',
      'HTML5',
      'SCSS',
      'Material UI',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive UI',
      'Chart.js',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'dns',
    skills: [
      '.NET Core',
      'C#',
      'REST APIs',
      'MySQL',
      'Entity Framework Core',
      'Authentication',
      'Authorization',
      'Microservices',
      'Swagger',
      'WebSockets',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: 'construction',
    skills: [
      'Azure',
      'CI/CD',
      'GitHub Actions',
      'Azure DevOps',
      'Docker',
      'Git',
      'VS Code',
      'Visual Studio',
      'Postman',
      'Linux',
      'Jira',
      'Cursor',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Ebix Technologies Ltd.',
    role: 'Senior Software Developer',
    duration: 'Dec, 2022 — Present',
    responsibilities: [
      'Built and maintained web page apps using Angular, .Net Core, and MySQL,improving application responsiveness and stability. Also, working with new AI technologies',
      'Developed reusable components, Directives, Pipes, state management and custom hooks in Angular',
      'Mentored 3 junior developers, helping them ramp up on Angular, NgRX, JavaScript, TypeScript and Git workflows.'
    ],
  },
  {
    company: 'Knoldus Inc.',
    role: 'Frontend Consultant',
    duration: 'Dec 2021 — Nov, 2022',
    responsibilities: [
      'Built and maintained multiple UI projects using Angular improving application responsiveness and stability',
      'Developed reusable components, Directives, Pipes, state management and custom hooks in Angular',
      'Lead UI evelopment team with 3 junior developers and 5 interns to smooth deliver multiple requirements of client.',
      'Mentored 5 junior developers, helping them starting there work on Angular, NgRX, JavaScrpt and Git workflows.',
    ],
  },
  {
    company: 'VEST Inc. ',
    role: 'Software Engineer',
    duration: 'Jan 2020 — Nov, 2021',
    responsibilities: [
      'Maintained web apps using Angular, .Net Core, and MySQL, improving application responsiveness and stability.',
      'Cloud based application to store multiple 3D design projects. Users are allowed to insert multiple designs of hydraulic machines.',
      'Developed multiple page for dynamic designing using ThreeJs, state management using redux.',
      'As fresher, learn and start getting experience on multiple technologies like ThreeJs, Redux, Angular, Typescript and .Net Core']
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Exposure Hub',
    projectType: 'Insurance & Finance',
    period: 'May 2024 — Present',
    details:
      'Full-stack web application for finance risk management. Built reusable Angular UI and REST APIs for reliable, efficient data handling across the platform.',
    technologies: [
      'Angular 17+',
      'TypeScript',
      'JavaScript',
      '.NET Core',
      'SQL Server',
      'RxJS',
      'NgRx',
      'AG Grid',
      'REST API',
      'Prompt AI',
      'Embedding APIs',
      'Elasticsearch',
      'Chart.js',
    ],
  },
  {
    name: 'Super Highway',
    projectType: 'Insurance & Finance',
    period: 'Dec 2022 — Apr 2023',
    details:
      'Designed and developed a responsive demonstration UI with static JSON-backed data. Delivered reusable components, feature modules, dynamic forms, and strong client-side validation with clear error states.',
    technologies: ['Angular 13', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx', 'GitLab'],
  },
  {
    name: 'Client Based Project',
    projectType: 'Education & Marketing',
    period: 'May 2022 — Nov 2022',
    details:
      'Multiple client- and admin-facing pages with dynamic CSS and styling. Complex reactive forms and real-time validation to streamline claims submission and day-to-day operations.',
    technologies: ['Angular 8', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx', 'GitHub', 'Jira'],
  },
  {
    name: 'Manifold Edge',
    projectType: 'Mechanical & 3D Design',
    period: 'May 2022 — Nov 2022',
    details:
      'Responsive UI with Angular Material and custom reusable directives for consistency across modules. JWT auth, robust form validation, secure REST consumption for policy and user data, and NgRx state across modules. Explored AI-driven UX improvements alongside core delivery.',
    technologies: [
      'Angular 5',
      'TypeScript',
      'JavaScript',
      '.NET Core',
      'MySQL',
      'RxJS',
      'NgRx',
      'Azure DevOps',
      'REST API',
      'Angular Material',
      'JWT',
    ],
  },
  {
    name: 'VEST — cloud 3D hydraulic design',
    projectType: 'Mechanical & 3D Design',
    period: 'Jan 2020 — Nov 2021',
    details:
      'At VEST Inc., New Delhi: cloud application to store and edit multiple 3D hydraulic machine designs. Built dynamic authoring flows with Three.js and Redux-backed state management while growing the stack across Angular, TypeScript, and .NET Core.',
    technologies: ['Angular', 'TypeScript', 'Three.js', 'Redux', '.NET Core', 'MySQL'],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  { name: 'Reactive Angular Course (with RxJs)', issuer: 'Udemy', year: '2022' },
  { name: 'Front-End JavaScript Frameworks: Angular', issuer: 'The Hong Kong University of Science and Technology', year: '2020' },
  { name: 'Introduction to Programming Using Python', issuer: 'Microsoft', year: '2019' },
  { name: 'Course on Computer Concepts', issuer: 'NIELIT', year: '2016' },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Academics Gold Medal',
    detail: 'Secured 1st position in MCA from MMMUT, Gorakhpur',
  },
  {
    title: 'Academic Excellence Award - First Division',
    detail: 'Awarded for academic excellence in B.Sc. (Hons.) Computer Science',
  },
  {
    title: 'Winner of Coding Competition - 2017, 2018',
    detail: 'Consicutively won the coding competition in 2017 and 2018',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. (Hons.) Computer Science',
    institution: 'Acharya Narendra Dev College, University of Delhi',
    year: '2014 - 2017'
  },
  {
    degree: 'Master of Computer Application',
    institution: 'Madan Mohan Malaviya University of Technology, Gorakhpur',
    year: '2017 - 2020'
  },
];
