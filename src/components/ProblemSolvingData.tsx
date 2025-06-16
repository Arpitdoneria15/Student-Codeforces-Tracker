
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressStats } from '@/types/student';

interface ProblemSolvingDataProps {
  stats: ProgressStats;
}

const ProblemSolvingData: React.FC<ProblemSolvingDataProps> = ({ stats }) => {
  console.log('ProblemSolvingData rendering with stats:', stats);
  
  const ratingData = stats.ratingDistribution.map(item => ({
    range: item.range,
    count: item.count,
  }));

  console.log('Rating data for chart:', ratingData);

  // Generate heat map data for the last 90 days
  const generateHeatMapData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 89; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];
      const count = stats.submissionHeatmap.find(item => item.date === dateKey)?.count || 0;
      
      data.push({
        date: dateKey,
        count,
        day: date.getDay(),
        week: Math.floor(i / 7),
      });
    }
    
    return data;
  };

  const heatMapData = generateHeatMapData();

  const getHeatMapColor = (count: number) => {
    if (count === 0) return 'bg-gray-100 dark:bg-gray-800';
    if (count <= 2) return 'bg-green-200 dark:bg-green-900';
    if (count <= 4) return 'bg-green-400 dark:bg-green-700';
    if (count <= 6) return 'bg-green-600 dark:bg-green-500';
    return 'bg-green-800 dark:bg-green-300';
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Total Problems
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.totalProblemsSelected}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.averageRating}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Problems/Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.averagePerDay}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Hardest Problem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {stats.mostDifficultProblem?.rating || stats.maxDifficulty || 'N/A'}
            </div>
            {stats.mostDifficultProblem && (
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {stats.mostDifficultProblem.name}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Rating Distribution Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Problems by Rating Range</CardTitle>
        </CardHeader>
        <CardContent>
          {ratingData.some(item => item.count > 0) ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="range" 
                    tick={{ fontSize: 12 }}
                    className="text-gray-600 dark:text-gray-300"
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    className="text-gray-600 dark:text-gray-300"
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '14px',
                    }}
                    formatter={(value, name) => [`${value} problems`, 'Count']}
                  />
                  <Bar 
                    dataKey="count" 
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500">No rating distribution data available</div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Submission Heat Map */}
      <Card>
        <CardHeader>
          <CardTitle>Submission Activity (Last 90 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Less</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-100 dark:bg-gray-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-800 dark:bg-green-300 rounded-sm"></div>
              </div>
              <span className="text-gray-600 dark:text-gray-300">More</span>
            </div>
            
            <div className="grid grid-cols-13 gap-1">
              {heatMapData.map((day, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getHeatMapColor(day.count)}`}
                  title={`${day.date}: ${day.count} submissions`}
                ></div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Most Difficult Problem */}
      {stats.mostDifficultProblem && (
        <Card>
          <CardHeader>
            <CardTitle>Most Difficult Problem Solved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{stats.mostDifficultProblem.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline">
                    Rating: {stats.mostDifficultProblem.rating}
                  </Badge>
                  <div className="flex space-x-1">
                    {stats.mostDifficultProblem.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Solved on {stats.mostDifficultProblem.submissionDate.toLocaleDateString()}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProblemSolvingData;
