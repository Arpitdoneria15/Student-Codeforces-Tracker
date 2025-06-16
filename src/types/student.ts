
export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  codeforcesHandle: string;
  currentRating: number;
  maxRating: number;
  lastUpdated: Date;
  isActive: boolean;
  reminderCount: number;
  autoEmailDisabled: boolean;
}

export interface Contest {
  id: string;
  name: string;
  date: Date;
  rank: number;
  ratingChange: number;
  newRating: number;
  problemsSolved: number;
  totalProblems: number;
}

export interface Problem {
  id: string;
  name: string;
  difficulty: number;
  solved: boolean;
  submissionDate: Date;
}

export interface ProgressStats {
  totalProblemsSelected: number;
  totalProblems: number;
  averageRating: number;
  maxDifficulty: number;
  averagePerDay: number;
  averageProblemsPerDay: number;
  ratingDistribution: { range: string; count: number }[];
  submissionHeatmap: { date: string; count: number; level: number }[];
  submissionHeatMap: { [key: string]: number };
  problemsByRating: { [key: string]: number };
  mostDifficultProblem?: {
    name: string;
    rating: number;
    tags: string[];
    submissionDate: Date;
  };
}
