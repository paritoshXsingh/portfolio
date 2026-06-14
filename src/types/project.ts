export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;

  thumbnail: string;

  github: string;
  live: string;

  featured: boolean;

  tech: string[];

  features: string[];

  challenges: string[];

  highlight: string;
  lessons: string[];

  images: string[];
}
