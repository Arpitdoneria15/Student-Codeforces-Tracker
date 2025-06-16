
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Contest } from '@/types/student';

interface ContestHistoryProps {
  contests: Contest[];
}

const ContestHistory: React.FC<ContestHistoryProps> = ({ contests }) => {
  console.log('ContestHistory rendering with contests:', contests.length);
  
  if (contests.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500">No contest data available</div>
      </div>
    );
  }

  const chartData = contests
    .slice()
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((contest, index) => ({
      name: contest.name.slice(0, 15) + '...',
      rating: contest.newRating,
      date: contest.date.toLocaleDateString(),
      contestName: contest.name,
      index: index + 1,
    }));

  console.log('Chart data for rating progress:', chartData);

  const getRatingChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getRatingChangeBadge = (change: number) => {
    if (change > 0) return 'default';
    if (change < 0) return 'destructive';
    return 'secondary';
  };

  return (
    <div className="space-y-6">
      {/* Rating Chart */}
      <div className="h-80">
        <h3 className="text-lg font-semibold mb-4">Rating Progress</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="index" 
              tick={{ fontSize: 12 }}
              className="text-gray-600 dark:text-gray-300"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              className="text-gray-600 dark:text-gray-300"
              domain={['dataMin - 50', 'dataMax + 50']}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '14px',
              }}
              labelFormatter={(label) => {
                const contest = chartData.find(c => c.index === label);
                return contest ? `${contest.contestName} (${contest.date})` : `Contest ${label}`;
              }}
              formatter={(value) => [`${value}`, 'Rating']}
            />
            <Line 
              type="monotone" 
              dataKey="rating" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Contest List */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Contests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-3 font-semibold text-sm">Contest</th>
                <th className="text-left py-2 px-3 font-semibold text-sm">Date</th>
                <th className="text-left py-2 px-3 font-semibold text-sm">Rank</th>
                <th className="text-left py-2 px-3 font-semibold text-sm">Rating Change</th>
                <th className="text-left py-2 px-3 font-semibold text-sm">Problems Solved</th>
              </tr>
            </thead>
            <tbody>
              {contests.slice(0, 10).map((contest) => (
                <tr
                  key={contest.id}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td className="py-3 px-3 font-medium">{contest.name}</td>
                  <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">
                    {contest.date.toLocaleDateString()}
                  </td>
                  <td className="py-3 px-3">
                    <Badge variant="outline">#{contest.rank}</Badge>
                  </td>
                  <td className="py-3 px-3">
                    <Badge 
                      variant={getRatingChangeBadge(contest.ratingChange)}
                      className={getRatingChangeColor(contest.ratingChange)}
                    >
                      {contest.ratingChange > 0 ? '+' : ''}{contest.ratingChange}
                    </Badge>
                  </td>
                  <td className="py-3 px-3 text-sm">
                    {contest.problemsSolved}/{contest.totalProblems}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContestHistory;
