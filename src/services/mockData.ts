import { Student, Contest, Problem, ProgressStats } from '@/types/student';

// Enhanced mock students with more realistic data
export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@example.com',
    phone: '+91-9876543210',
    codeforcesHandle: 'arjun_codes',
    currentRating: 1847,
    maxRating: 1923,
    isActive: true,
    lastUpdated: new Date('2024-06-12'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '+91-9876543211',
    codeforcesHandle: 'priya_cp',
    currentRating: 2156,
    maxRating: 2203,
    isActive: true,
    lastUpdated: new Date('2024-06-13'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '3',
    name: 'Rohit Kumar',
    email: 'rohit.kumar@example.com',
    phone: '+91-9876543212',
    codeforcesHandle: 'rohit_master',
    currentRating: 1654,
    maxRating: 1712,
    isActive: false,
    lastUpdated: new Date('2024-06-10'),
    reminderCount: 2,
    autoEmailDisabled: false,
  },
  {
    id: '4',
    name: 'Anjali Singh',
    email: 'anjali.singh@example.com',
    phone: '+91-9876543213',
    codeforcesHandle: 'anjali_algo',
    currentRating: 1423,
    maxRating: 1456,
    isActive: true,
    lastUpdated: new Date('2024-06-13'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '5',
    name: 'Vikram Gupta',
    email: 'vikram.gupta@example.com',
    phone: '+91-9876543214',
    codeforcesHandle: 'vikram_cf',
    currentRating: 1189,
    maxRating: 1267,
    isActive: true,
    lastUpdated: new Date('2024-06-12'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '6',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    phone: '+91-9876543215',
    codeforcesHandle: 'sneha_codes',
    currentRating: 987,
    maxRating: 1034,
    isActive: false,
    lastUpdated: new Date('2024-06-08'),
    reminderCount: 3,
    autoEmailDisabled: false,
  },
  {
    id: '7',
    name: 'Amit Verma',
    email: 'amit.verma@example.com',
    phone: '+91-9876543216',
    codeforcesHandle: 'amit_competitive',
    currentRating: 1567,
    maxRating: 1623,
    isActive: true,
    lastUpdated: new Date('2024-06-13'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '8',
    name: 'Neha Joshi',
    email: 'neha.joshi@example.com',
    phone: '+91-9876543217',
    codeforcesHandle: 'neha_problem_solver',
    currentRating: 1345,
    maxRating: 1398,
    isActive: true,
    lastUpdated: new Date('2024-06-12'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '9',
    name: 'Karan Malik',
    email: 'karan.malik@example.com',
    phone: '+91-9876543218',
    codeforcesHandle: 'karan_cp_master',
    currentRating: 1876,
    maxRating: 1934,
    isActive: true,
    lastUpdated: new Date('2024-06-13'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '10',
    name: 'Divya Agarwal',
    email: 'divya.agarwal@example.com',
    phone: '+91-9876543219',
    codeforcesHandle: 'divya_algorithms',
    currentRating: 1234,
    maxRating: 1289,
    isActive: false,
    lastUpdated: new Date('2024-06-09'),
    reminderCount: 1,
    autoEmailDisabled: false,
  },
  {
    id: '11',
    name: 'Rahul Saxena',
    email: 'rahul.saxena@example.com',
    phone: '+91-9876543220',
    codeforcesHandle: 'rahul_icpc',
    currentRating: 2034,
    maxRating: 2087,
    isActive: true,
    lastUpdated: new Date('2024-06-13'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '12',
    name: 'Pooja Sharma',
    email: 'pooja.sharma@example.com',
    phone: '+91-9876543221',
    codeforcesHandle: 'pooja_coder',
    currentRating: 1456,
    maxRating: 1523,
    isActive: true,
    lastUpdated: new Date('2024-06-12'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '13',
    name: 'Siddharth Mishra',
    email: 'siddharth.mishra@example.com',
    phone: '+91-9876543222',
    codeforcesHandle: 'sid_programming',
    currentRating: 1723,
    maxRating: 1789,
    isActive: true,
    lastUpdated: new Date('2024-06-13'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
  {
    id: '14',
    name: 'Tanvi Kapoor',
    email: 'tanvi.kapoor@example.com',
    phone: '+91-9876543223',
    codeforcesHandle: 'tanvi_competitive',
    currentRating: 1134,
    maxRating: 1187,
    isActive: false,
    lastUpdated: new Date('2024-06-07'),
    reminderCount: 4,
    autoEmailDisabled: true,
  },
  {
    id: '15',
    name: 'Aryan Khanna',
    email: 'aryan.khanna@example.com',
    phone: '+91-9876543224',
    codeforcesHandle: 'aryan_expert',
    currentRating: 1678,
    maxRating: 1734,
    isActive: true,
    lastUpdated: new Date('2024-06-13'),
    reminderCount: 0,
    autoEmailDisabled: false,
  },
];

// Generate mock contests for a student
export const generateMockContests = (studentId: string): Contest[] => {
  console.log('Generating mock contests for student:', studentId);
  
  const baseRating = 1500 + Math.floor(Math.random() * 500); // Random base rating
  let currentRating = baseRating;
  
  const contests: Contest[] = [];
  
  // Generate 8 contests over the last 90 days
  for (let i = 0; i < 8; i++) {
    const daysAgo = Math.floor(Math.random() * 90) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    const ratingChange = Math.floor(Math.random() * 200) - 100; // -100 to +100
    const newRating = Math.max(800, currentRating + ratingChange);
    
    contests.push({
      id: `contest${i + 1}`,
      name: `Contest Round #${900 + i} (Div. ${Math.random() > 0.5 ? '2' : '1'})`,
      date,
      rank: Math.floor(Math.random() * 500) + 50,
      ratingChange,
      newRating,
      problemsSolved: Math.floor(Math.random() * 4) + 1,
      totalProblems: Math.floor(Math.random() * 2) + 4,
    });
    
    currentRating = newRating;
  }
  
  // Sort by date (oldest first)
  contests.sort((a, b) => a.date.getTime() - b.date.getTime());
  
  console.log('Generated contests:', contests);
  return contests;
};

// Generate mock problems for a student
export const generateMockProblems = (studentId: string): Problem[] => {
  console.log('Generating mock problems for student:', studentId);
  
  const problems: Problem[] = [];
  const difficulties = [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
  const problemNames = [
    'Two Sum', 'Binary Search', 'Graph DFS', 'Dynamic Programming', 'Segment Tree',
    'Number Theory', 'Greedy Algorithm', 'String Matching', 'BFS Implementation',
    'Sorting Algorithms', 'Binary Tree Traversal', 'Hash Table Implementation',
    'Dijkstra Algorithm', 'Matrix Operations', 'Bit Manipulation', 'Combinatorics',
    'Advanced DP', 'Flow Networks', 'Shortest Path', 'Tree Algorithms',
    'Graph Theory', 'Math Problems', 'Geometry', 'String Algorithms'
  ];
  
  // Generate 30-50 problems over the last 90 days
  const numProblems = Math.floor(Math.random() * 20) + 30;
  
  for (let i = 0; i < numProblems; i++) {
    const daysAgo = Math.floor(Math.random() * 90) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    const name = problemNames[Math.floor(Math.random() * problemNames.length)];
    
    problems.push({
      id: `p${i + 1}`,
      name: `${name} ${i + 1}`,
      difficulty,
      solved: Math.random() > 0.2, // 80% success rate
      submissionDate: date,
    });
  }
  
  console.log('Generated problems:', problems.length);
  return problems;
};

// Calculate enhanced progress statistics
export const calculateProgressStats = (problems: Problem[], days: number = 30): ProgressStats => {
  console.log('Calculating progress stats for', problems.length, 'problems over', days, 'days');
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  const recentProblems = problems.filter(p => 
    p.solved && p.submissionDate && p.submissionDate >= cutoffDate
  );
  
  console.log('Recent solved problems:', recentProblems.length);
  
  const totalSolved = recentProblems.length;
  const avgRating = totalSolved > 0 ? 
    Math.round(recentProblems.reduce((sum, p) => sum + p.difficulty, 0) / totalSolved) : 0;
  const maxDifficulty = totalSolved > 0 ? 
    Math.max(...recentProblems.map(p => p.difficulty)) : 0;
  const avgPerDay = totalSolved > 0 ? Number((totalSolved / days).toFixed(1)) : 0;

  // Enhanced rating distribution
  const ratingDistribution = [
    { range: '800-999', count: recentProblems.filter(p => p.difficulty >= 800 && p.difficulty < 1000).length },
    { range: '1000-1199', count: recentProblems.filter(p => p.difficulty >= 1000 && p.difficulty < 1200).length },
    { range: '1200-1399', count: recentProblems.filter(p => p.difficulty >= 1200 && p.difficulty < 1400).length },
    { range: '1400-1599', count: recentProblems.filter(p => p.difficulty >= 1400 && p.difficulty < 1600).length },
    { range: '1600-1799', count: recentProblems.filter(p => p.difficulty >= 1600 && p.difficulty < 1800).length },
    { range: '1800-1999', count: recentProblems.filter(p => p.difficulty >= 1800 && p.difficulty < 2000).length },
    { range: '2000+', count: recentProblems.filter(p => p.difficulty >= 2000).length },
  ];

  // Enhanced submission heatmap with more realistic pattern
  const submissionHeatmap = Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    const dateStr = date.toISOString().split('T')[0];
    
    const submissionsOnDay = recentProblems.filter(p => {
      const submissionDate = p.submissionDate?.toISOString().split('T')[0];
      return submissionDate === dateStr;
    }).length;
    
    return {
      date: dateStr,
      count: submissionsOnDay,
      level: Math.min(4, Math.floor(submissionsOnDay / 2)) // 0-4 intensity levels
    };
  });

  // Create submissionHeatMap for backward compatibility
  const submissionHeatMap: { [key: string]: number } = {};
  submissionHeatmap.forEach(item => {
    submissionHeatMap[item.date] = item.count;
  });

  // Create problemsByRating for backward compatibility
  const problemsByRating: { [key: string]: number } = {};
  ratingDistribution.forEach(item => {
    problemsByRating[item.range] = item.count;
  });

  // Find most difficult problem
  const mostDifficultProblem = recentProblems.length > 0 ? 
    recentProblems.reduce((max, problem) => 
      problem.difficulty > max.difficulty ? problem : max
    ) : null;

  const stats = {
    totalProblemsSelected: totalSolved,
    totalProblems: totalSolved,
    averageRating: avgRating,
    maxDifficulty,
    averagePerDay: avgPerDay,
    averageProblemsPerDay: avgPerDay,
    ratingDistribution,
    submissionHeatmap,
    submissionHeatMap,
    problemsByRating,
    mostDifficultProblem: mostDifficultProblem ? {
      name: mostDifficultProblem.name,
      rating: mostDifficultProblem.difficulty,
      tags: ['algorithms', 'data-structures', 'math'], // Mock tags
      submissionDate: mostDifficultProblem.submissionDate,
    } : undefined,
  };
  
  console.log('Calculated progress stats:', stats);
  return stats;
};
