export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  details: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
