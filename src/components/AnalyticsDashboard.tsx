
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, Trophy, TrendingUp, Target, AlertTriangle, Mail } from 'lucide-react';
import { Student } from '@/types/student';

interface AnalyticsDashboardProps {
  students: Student[];
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ students }) => {
  // Calculate analytics data
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.isActive).length;
  const averageRating = Math.round(students.reduce((sum, s) => sum + s.currentRating, 0) / totalStudents || 0);
  const highestRating = Math.max(...students.map(s => s.currentRating), 0);
  const studentsWithReminders = students.filter(s => s.reminderCount > 0).length;

  // Rating distribution data
  const ratingBuckets = [
    { range: '0-999', count: students.filter(s => s.currentRating < 1000).length, color: '#64748b' },
    { range: '1000-1199', count: students.filter(s => s.currentRating >= 1000 && s.currentRating < 1200).length, color: '#22c55e' },
    { range: '1200-1399', count: students.filter(s => s.currentRating >= 1200 && s.currentRating < 1400).length, color: '#3b82f6' },
    { range: '1400-1599', count: students.filter(s => s.currentRating >= 1400 && s.currentRating < 1600).length, color: '#8b5cf6' },
    { range: '1600-1899', count: students.filter(s => s.currentRating >= 1600 && s.currentRating < 1900).length, color: '#f97316' },
    { range: '1900+', count: students.filter(s => s.currentRating >= 1900).length, color: '#ef4444' },
  ];

  // Student status data for pie chart
  const statusData = [
    { name: 'Active', value: activeStudents, color: '#22c55e' },
    { name: 'Inactive', value: totalStudents - activeStudents, color: '#ef4444' },
  ];

  // Progress tracking data (mock data for demonstration)
  const progressData = [
    { month: 'Jan', averageRating: 1150, activeStudents: 85 },
    { month: 'Feb', averageRating: 1200, activeStudents: 88 },
    { month: 'Mar', averageRating: 1250, activeStudents: 92 },
    { month: 'Apr', averageRating: 1300, activeStudents: 89 },
    { month: 'May', averageRating: 1320, activeStudents: 94 },
    { month: 'Jun', averageRating: averageRating, activeStudents: activeStudents },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Analytics Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Comprehensive insights into student performance and progress
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Users className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalStudents}</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Total Students</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
              <div>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">{activeStudents}</div>
                <div className="text-sm text-green-600 dark:text-green-400">Active Students</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Target className="text-purple-600 dark:text-purple-400" size={24} />
              <div>
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{averageRating}</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Avg Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Trophy className="text-yellow-600 dark:text-yellow-400" size={24} />
              <div>
                <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{highestRating}</div>
                <div className="text-sm text-yellow-600 dark:text-yellow-400">Highest Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-red-600 dark:text-red-400" size={24} />
              <div>
                <div className="text-2xl font-bold text-red-700 dark:text-red-300">{studentsWithReminders}</div>
                <div className="text-sm text-red-600 dark:text-red-400">Need Reminders</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rating Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratingBuckets}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="range" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Student Status */}
        <Card>
          <CardHeader>
            <CardTitle>Student Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Tracking - 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="rating" orientation="left" />
                <YAxis yAxisId="students" orientation="right" />
                <Tooltip />
                <Line 
                  yAxisId="rating"
                  type="monotone" 
                  dataKey="averageRating" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Average Rating"
                />
                <Line 
                  yAxisId="students"
                  type="monotone" 
                  dataKey="activeStudents" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  name="Active Students"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
