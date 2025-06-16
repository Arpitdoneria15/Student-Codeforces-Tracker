
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Student } from '@/types/student';

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddStudent: (student: Omit<Student, 'id' | 'lastUpdated'>) => void;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({ isOpen, onClose, onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    codeforcesHandle: '',
    currentRating: 0,
    maxRating: 0,
    isActive: true,
    reminderCount: 0,
    autoEmailDisabled: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.codeforcesHandle) {
      onAddStudent(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        codeforcesHandle: '',
        currentRating: 0,
        maxRating: 0,
        isActive: true,
        reminderCount: 0,
        autoEmailDisabled: false,
      });
      onClose();
    }
  };

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Student name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="student@example.com"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+1234567890"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="codeforcesHandle">Codeforces Handle *</Label>
              <Input
                id="codeforcesHandle"
                value={formData.codeforcesHandle}
                onChange={(e) => handleInputChange('codeforcesHandle', e.target.value)}
                placeholder="cf_handle"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentRating">Current Rating</Label>
              <Input
                id="currentRating"
                type="number"
                value={formData.currentRating}
                onChange={(e) => handleInputChange('currentRating', parseInt(e.target.value) || 0)}
                placeholder="1200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxRating">Max Rating</Label>
              <Input
                id="maxRating"
                type="number"
                value={formData.maxRating}
                onChange={(e) => handleInputChange('maxRating', parseInt(e.target.value) || 0)}
                placeholder="1500"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Student</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentModal;
