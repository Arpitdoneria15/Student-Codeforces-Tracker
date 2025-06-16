
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Target, AlertTriangle } from 'lucide-react';
import { ProgressStats } from '@/types/student';

interface StrengthsWeaknessesProps {
  stats: ProgressStats;
}

const StrengthsWeaknesses: React.FC<StrengthsWeaknessesProps> = ({ stats }) => {
  // Analyze strengths based on rating distribution
  const getStrengths = () => {
    const strengths = [];
    
    if (stats.averageRating > 1500) {
      strengths.push({
        title: 'Advanced Problem Solving',
        description: `Average rating of ${stats.averageRating} shows strong algorithmic skills`,
        level: 'high'
      });
    }
    
    if (stats.averagePerDay > 3) {
      strengths.push({
        title: 'Consistent Practice',
        description: `Solving ${stats.averagePerDay} problems per day shows dedication`,
        level: 'high'
      });
    }
    
    // Check for rating range distribution
    const advancedProblems = stats.ratingDistribution
      .filter(range => range.range.includes('1600') || range.range.includes('1800') || range.range.includes('2000'))
      .reduce((sum, range) => sum + range.count, 0);
    
    if (advancedProblems > 5) {
      strengths.push({
        title: 'Complex Algorithm Mastery',
        description: `Solved ${advancedProblems} advanced problems (1600+ rating)`,
        level: 'medium'
      });
    }
    
    if (stats.averagePerDay > 1 && stats.averagePerDay <= 3) {
      strengths.push({
        title: 'Regular Practice',
        description: `Maintaining ${stats.averagePerDay} problems per day consistently`,
        level: 'medium'
      });
    }
    
    return strengths;
  };

  // Analyze weaknesses based on rating distribution and patterns
  const getWeaknesses = () => {
    const weaknesses = [];
    
    if (stats.averageRating < 1200) {
      weaknesses.push({
        title: 'Basic Concepts',
        description: 'Focus on fundamental algorithms and data structures',
        suggestion: 'Practice more 800-1200 rated problems',
        level: 'high'
      });
    }
    
    if (stats.averagePerDay < 1) {
      weaknesses.push({
        title: 'Practice Consistency',
        description: 'Low daily problem-solving frequency',
        suggestion: 'Set a goal of at least 1-2 problems per day',
        level: 'high'
      });
    }
    
    // Check for gaps in rating distribution
    const basicProblems = stats.ratingDistribution
      .filter(range => range.range.includes('800') || range.range.includes('1000'))
      .reduce((sum, range) => sum + range.count, 0);
    
    if (basicProblems < 5 && stats.totalProblemsSelected > 10) {
      weaknesses.push({
        title: 'Foundation Building',
        description: 'Limited practice with basic problems',
        suggestion: 'Strengthen fundamentals with 800-1200 rated problems',
        level: 'medium'
      });
    }
    
    const advancedProblems = stats.ratingDistribution
      .filter(range => range.range.includes('1800') || range.range.includes('2000'))
      .reduce((sum, range) => sum + range.count, 0);
    
    if (advancedProblems === 0 && stats.averageRating > 1400) {
      weaknesses.push({
        title: 'Advanced Challenges',
        description: 'Ready for more challenging problems',
        suggestion: 'Try solving 1800+ rated problems to improve further',
        level: 'low'
      });
    }
    
    return weaknesses;
  };

  const strengths = getStrengths();
  const weaknesses = getWeaknesses();

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Strengths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-600">
            <TrendingUp size={24} />
            <span>Strengths</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strengths.length > 0 ? (
              strengths.map((strength, index) => (
                <div key={index} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">{strength.title}</h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">{strength.description}</p>
                    </div>
                    <Badge className={getLevelColor(strength.level)} variant="secondary">
                      {strength.level}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                Keep practicing to identify your strengths!
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Weaknesses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-orange-600">
            <TrendingDown size={24} />
            <span>Areas for Improvement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weaknesses.length > 0 ? (
              weaknesses.map((weakness, index) => (
                <div key={index} className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200">{weakness.title}</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">{weakness.description}</p>
                    </div>
                    <Badge className={getLevelColor(weakness.level)} variant="secondary">
                      {weakness.level}
                    </Badge>
                  </div>
                  <div className="flex items-start space-x-2 mt-3">
                    <Target size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-orange-800 dark:text-orange-200">{weakness.suggestion}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                Great! No major weaknesses identified.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrengthsWeaknesses;
