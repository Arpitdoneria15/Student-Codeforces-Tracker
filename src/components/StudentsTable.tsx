
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Download, Edit, Trash2, Eye, Mail } from 'lucide-react';
import { Student } from '@/types/student';
import { useToast } from '@/hooks/use-toast';

interface StudentsTableProps {
  students: Student[];
  onStudentSelect: (student: Student) => void;
  onAddStudent: () => void;
  onEditStudent: (student: Student) => void;
  onDeleteStudent: (studentId: string) => void;
}

const StudentsTable: React.FC<StudentsTableProps> = ({
  students,
  onStudentSelect,
  onAddStudent,
  onEditStudent,
  onDeleteStudent,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.codeforcesHandle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Codeforces Handle', 'Current Rating', 'Max Rating', 'Last Updated'];
    const csvContent = [
      headers.join(','),
      ...filteredStudents.map(student => [
        student.name,
        student.email,
        student.phone,
        student.codeforcesHandle,
        student.currentRating,
        student.maxRating,
        student.lastUpdated.toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'students.csv';
    a.click();

    toast({
      title: "Export Successful",
      description: "Student data has been exported to CSV.",
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 2100) return 'bg-red-500';
    if (rating >= 1900) return 'bg-orange-500';
    if (rating >= 1600) return 'bg-purple-500';
    if (rating >= 1400) return 'bg-blue-500';
    if (rating >= 1200) return 'bg-green-500';
    return 'bg-gray-500';
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Students Management</span>
            <div className="flex space-x-2">
              <Button onClick={exportToCSV} variant="outline" size="sm">
                <Download size={16} className="mr-2" />
                Export CSV
              </Button>
              <Button onClick={onAddStudent} size="sm">
                <Plus size={16} className="mr-2" />
                Add Student
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search by name, email, or Codeforces handle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm hidden md:table-cell">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm hidden lg:table-cell">Phone</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">CF Handle</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Rating</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm hidden sm:table-cell">Status</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-gray-500 md:hidden">{student.email}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 hidden md:table-cell text-sm text-gray-600 dark:text-gray-300">
                      {student.email}
                    </td>
                    <td className="py-4 px-4 hidden lg:table-cell text-sm text-gray-600 dark:text-gray-300">
                      {student.phone}
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="font-mono">
                        {student.codeforcesHandle}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getRatingColor(student.currentRating)}`}></div>
                        <div>
                          <div className="font-medium">{student.currentRating}</div>
                          <div className="text-xs text-gray-500">Max: {student.maxRating}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 hidden sm:table-cell">
                      <div className="flex flex-col space-y-1">
                        <Badge
                          variant={student.isActive ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {student.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                        {student.reminderCount > 0 && (
                          <div className="flex items-center text-xs text-orange-600">
                            <Mail size={12} className="mr-1" />
                            {student.reminderCount}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center space-x-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onStudentSelect(student)}
                          className="p-2"
                        >
                          <Eye size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onEditStudent(student)}
                          className="p-2"
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onDeleteStudent(student.id)}
                          className="p-2 text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              {searchTerm ? 'No students found matching your search.' : 'No students found.'}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentsTable;
