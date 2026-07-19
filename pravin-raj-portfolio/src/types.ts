export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Skill {
  name: string;
  category: 'ai_ml' | 'web_backend' | 'devops_tools' | 'other';
  level: number; // percentage
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}
