export type AppCategory = 'journal';

export interface ProjectManifest {
  name: string;
  title: string;
  category: AppCategory;
  description: string;
  languages: string[];
  entrypoints: {
    html: string;
    css: string;
    javascript: string;
  };
}

export const projectManifest: ProjectManifest = {
  name: 'micro-journal-mood-heatmap',
  title: 'Micro Journal Mood Heatmap',
  category: 'journal',
  description: 'A private 280-character journal with mood tags, streaks, and yearly heatmap visualization.',
  languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'JSON', 'Markdown'],
  entrypoints: {
    html: 'index.html',
    css: 'assets/styles.css',
    javascript: 'assets/app.js'
  }
};
