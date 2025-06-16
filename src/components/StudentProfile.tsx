
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Trophy, Target, TrendingUp, Brain } from 'lucide-react';
import { Student, Contest, ProgressStats } from '@/types/student';
import { generateMockContests, generateMockProblems, calculateProgressStats } from '@/services/mockData';
import ContestHistory from './ContestHistory';
import ProblemSolvingData from './ProblemSolvingData';
import StrengthsWeaknesses from './StrengthsWeaknesses';

interface StudentProfileProps {
  student: Student;
  onBack: () => void;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student, onBack }) => {
  const [contestFilter, setContestFilter] = useState<'30' | '90' | '365'>('90');
  const [problemFilter, setProblemFilter] = useState<'7' | '30' | '90'>('30');
  const [contests, setContests] = useState<Contest[]>([]);
  const [progressStats, setProgressStats] = useState<ProgressStats | null>(null);

  useEffect(() => {
    console.log('StudentProfile useEffect - student:', student.id);
    
    const mockContests = generateMockContests(student.id);
    const mockProblems = generateMockProblems(student.id);
    
    console.log('Generated contests:', mockContests.length);
    console.log('Generated problems:', mockProblems.length);
    
    setContests(mockContests);
    const stats = calculateProgressStats(mockProblems, parseInt(problemFilter));
    console.log('Setting progress stats:', stats);
    setProgressStats(stats);
  }, [student.id, problemFilter]);

  const filteredContests = contests.filter(contest => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - parseInt(contestFilter));
    return contest.date >= cutoffDate;
  });

  const getRatingColor = (rating: number) => {
    if (rating >= 2100) return 'text-red-500';
    if (rating >= 1900) return 'text-orange-500';
    if (rating >= 1600) return 'text-purple-500';
    if (rating >= 1400) return 'text-blue-500';
    if (rating >= 1200) return 'text-green-500';
    return 'text-gray-500';
  };

  console.log('StudentProfile render - progressStats:', progressStats);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2 hover:bg-white/50">
              <ArrowLeft size={20} />
              <span>Back to Students</span>
            </Button>
            <Badge className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Last Updated: {student.lastUpdated.toLocaleDateString()}
            </Badge>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{student.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
              <span>{student.email}</span>
              <span>{student.phone}</span>
              <Badge variant="outline" className="font-mono bg-white/50">
                {student.codeforcesHandle}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg backdrop-blur-sm">
              <Trophy className="text-yellow-500" size={24} />
              <div>
                <div className="font-semibold">Current Rating</div>
                <div className={`text-2xl font-bold ${getRatingColor(student.currentRating)}`}>
                  {student.currentRating}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg backdrop-blur-sm">
              <Target className="text-green-500" size={24} />
              <div>
                <div className="font-semibold">Max Rating</div>
                <div className={`text-2xl font-bold ${getRatingColor(student.maxRating)}`}>
                  {student.maxRating}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg backdrop-blur-sm">
              <TrendingUp className={student.isActive ? "text-green-500" : "text-red-500"} size={24} />
              <div>
                <div className="font-semibold">Status</div>
                <div className={`text-2xl font-bold ${student.isActive ? 'text-green-600' : 'text-red-600'}`}>
                  {student.isActive ? 'Active' : 'Inactive'}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strengths and Weaknesses Analysis */}
      {progressStats && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain size={24} className="text-purple-600" />
              <span>Performance Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <StrengthsWeaknesses stats={progressStats} />
          </CardContent>
        </Card>
      )}

      {/* Contest History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Calendar size={24} />
              <span>Contest History</span>
            </CardTitle>
            <Select value={contestFilter} onValueChange={(value) => setContestFilter(value as '30' | '90' | '365')}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
                <SelectItem value="365">Last 365 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ContestHistory contests={filteredContests} />
        </CardContent>
      </Card>

      {/* Problem Solving Data */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Target size={24} />
              <span>Problem Solving Analytics</span>
            </CardTitle>
            <Select value={problemFilter} onValueChange={(value) => setProblemFilter(value as '7' | '30' | '90')}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {progressStats ? (
            <ProblemSolvingData stats={progressStats} />
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500">Loading progress data...</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfile;
