
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Users, BarChart3, Code, Trophy } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
  currentView: 'students' | 'analytics';
  onViewChange: (view: 'students' | 'analytics') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-b border-slate-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Trophy className="text-yellow-900" size={12} />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TLE Eliminators
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Student Progress Hub
                  </p>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex space-x-4">
                <Button
                  variant={currentView === 'students' ? 'default' : 'ghost'}
                  onClick={() => onViewChange('students')}
                  className="flex items-center space-x-2 transition-all duration-200"
                >
                  <Users size={18} />
                  <span>Students</span>
                </Button>
                <Button
                  variant={currentView === 'analytics' ? 'default' : 'ghost'}
                  onClick={() => onViewChange('analytics')}
                  className="flex items-center space-x-2 transition-all duration-200"
                >
                  <BarChart3 size={18} />
                  <span>Analytics</span>
                </Button>
              </nav>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-slate-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2024 TLE Eliminators. Empowering competitive programmers to eliminate Time Limit Exceeded errors.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
