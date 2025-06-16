
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import StudentsTable from '@/components/StudentsTable';
import StudentProfile from '@/components/StudentProfile';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import AddStudentModal from '@/components/AddStudentModal';
import { Student } from '@/types/student';
import { mockStudents } from '@/services/mockData';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [currentView, setCurrentView] = useState<'students' | 'analytics'>('students');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { toast } = useToast();

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleBackToStudents = () => {
    setSelectedStudent(null);
  };

  const handleAddStudent = () => {
    setIsAddModalOpen(true);
  };

  const handleAddStudentSubmit = (studentData: Omit<Student, 'id' | 'lastUpdated'>) => {
    const newStudent: Student = {
      ...studentData,
      id: Date.now().toString(),
      lastUpdated: new Date(),
    };
    
    setStudents(prev => [...prev, newStudent]);
    toast({
      title: "Student Added",
      description: `${newStudent.name} has been successfully added to the system.`,
    });
  };

  const handleEditStudent = (student: Student) => {
    toast({
      title: "Edit Student",
      description: `Edit functionality for ${student.name} would be implemented here.`,
    });
  };

  const handleDeleteStudent = (studentId: string) => {
    const student = students.find(s => s.id === studentId);
    if (student) {
      setStudents(students.filter(s => s.id !== studentId));
      toast({
        title: "Student Deleted",
        description: `${student.name} has been removed from the system.`,
        variant: "destructive",
      });
    }
  };

  const renderContent = () => {
    if (selectedStudent) {
      return (
        <StudentProfile
          student={selectedStudent}
          onBack={handleBackToStudents}
        />
      );
    }

    if (currentView === 'analytics') {
      return <AnalyticsDashboard students={students} />;
    }

    return (
      <StudentsTable
        students={students}
        onStudentSelect={handleStudentSelect}
        onAddStudent={handleAddStudent}
        onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    );
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderContent()}
      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddStudent={handleAddStudentSubmit}
      />
    </Layout>
  );
};

export default Index;
