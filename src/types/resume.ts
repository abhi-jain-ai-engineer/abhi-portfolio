export interface ContactInfo {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface ProfileHighlight {
  label: string;
  value: string;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  start: string;
  end: string;
  /** Omitted = render the date range as-is, no badge. Only set when the resume itself flags it. */
  status?: "in_progress";
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface ProjectEntry {
  id: string;
  name: string;
  year: string;
  description: string;
  tools: string[];
  /** Only present when the resume states a quantified result. */
  outcome?: string;
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface ResumeContent {
  contact: ContactInfo;
  profileSummary: string;
  highlights: ProfileHighlight[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
  projects: ProjectEntry[];
  languages: LanguageEntry[];
}
