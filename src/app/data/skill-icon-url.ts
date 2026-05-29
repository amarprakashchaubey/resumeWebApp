/**
 * Official-style tech marks via pinned CDNs (Simple Icons + Devicon).
 * Simple Icons: https://github.com/simple-icons/simple-icons — Devicon: https://github.com/devicons/devicon
 */
const SI = 'https://cdn.jsdelivr.net/npm/simple-icons@16.18.1/icons';
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.16.7/icons';

const si = (slug: string) => `${SI}/${slug}.svg`;
const di = (folder: string, file: string) => `${DI}/${folder}/${file}`;

/** Display label from portfolio data → raster/SVG asset URL */
export const SKILL_ICON_URL: Readonly<Record<string, string>> = {
  Angular: si('angular'),
  TypeScript: si('typescript'),
  JavaScript: si('javascript'),
  NgRx: si('ngrx'),
  RxJS: si('reactivex'),
  HTML5: si('html5'),
  SCSS: si('sass'),
  'Material UI': si('materialdesign'),
  'Tailwind CSS': si('tailwindcss'),
  Bootstrap: si('bootstrap'),
  'Responsive UI': si('css3'),
  'Chart.js': si('chartdotjs'),

  '.NET Core': si('dotnet'),
  /** C# (Simple Icons excludes the language mark); Devicon carries the endorsed-style artwork */
  'C#': di('csharp', 'csharp-plain.svg'),
  'REST APIs': si('openapiinitiative'),
  MySQL: si('mysql'),
  'Entity Framework Core': si('dotnet'),
  Authentication: si('jsonwebtokens'),
  Authorization: si('openid'),
  Microservices: si('kubernetes'),
  Swagger: si('swagger'),
  WebSockets: si('socketdotio'),

  /** Microsoft Azure — not in Simple Icons data; Azure shape from Devicon */
  Azure: di('azure', 'azure-original.svg'),
  /** Generic CI/CD pipeline mark */
  'CI/CD': si('jenkins'),
  'GitHub Actions': si('githubactions'),
  /** Azure DevOps marks are not Simple Icons entries */
  'Azure DevOps': di('azuredevops', 'azuredevops-original.svg'),
  Docker: si('docker'),
  Git: si('git'),
  'VS Code': di('vscode', 'vscode-original.svg'),
  'Visual Studio': di('visualstudio', 'visualstudio-plain.svg'),
  Postman: si('postman'),
  Linux: si('linux'),
  Jira: si('jira'),
  Cursor: si('cursor'),
};

export function skillIconUrl(label: string): string | undefined {
  return SKILL_ICON_URL[label];
}
