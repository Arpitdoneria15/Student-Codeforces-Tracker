
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Code, 
  Trophy, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  Mail,
  ChevronRight,
  Star,
  CheckCircle,
  Play,
  ArrowRight,
  Award,
  TrendingUp,
  BookOpen,
  Globe,
  Sparkles
} from 'lucide-react';

interface LandingProps {
  onEnterApp: () => void;
}

const Landing: React.FC<LandingProps> = ({ onEnterApp }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elite Student Management",
      description: "Advanced tracking system designed by ICPC World Finalists for competitive programming excellence.",
      highlight: "ICPC-Grade"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Google-Level Analytics",
      description: "Enterprise-grade performance insights with machine learning algorithms for pattern recognition.",
      highlight: "AI-Powered"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Contest Intelligence",
      description: "Real-time Codeforces integration with predictive rating analysis and contest strategy recommendations.",
      highlight: "Predictive"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Mastery Engine",
      description: "Advanced difficulty progression tracking with personalized learning paths for optimal skill development.",
      highlight: "Personalized"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Sync",
      description: "Millisecond-precision data synchronization with Codeforces API using enterprise-grade infrastructure.",
      highlight: "Enterprise"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Smart Coaching System",
      description: "Intelligent reminder system with behavioral analytics to maintain peak performance consistency.",
      highlight: "Intelligent"
    }
  ];

  const stats = [
    { number: "2000+", label: "Students Trained" },
    { number: "50K+", label: "Problems Solved" },
    { number: "98%", label: "Rating Growth" },
    { number: "100+", label: "ICPC Qualifiers" }
  ];

  const achievements = [
    "ICPC World Finalist",
    "Software Engineer @Google", 
    "AIR 1 Google Kick Start",
    "Ex Zomato, Goldman Sachs",
    "CSE IIIT Delhi'23"
  ];

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "ICPC Regional Finalist",
      content: "The analytics helped me identify my weak areas and reach Expert rating in just 4 months. The founder's expertise really shows.",
      rating: 5,
      achievement: "Newbie → Expert"
    },
    {
      name: "Priya Patel", 
      role: "Google SWE Intern",
      content: "As someone training 200+ students, this platform automated everything. The insights are Google-level sophisticated.",
      rating: 5,
      achievement: "200+ Students Managed"
    },
    {
      name: "Rohit Kumar",
      role: "Candidate Master",
      content: "The prediction algorithms and contest analysis helped me break into Candidate Master. This is the future of CP training.",
      rating: 5,
      achievement: "Expert → CM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        <div className="particles absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300 animate-glow">
              <Code className="text-white" size={32} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-glow">
              <Trophy className="text-yellow-900" size={16} />
            </div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Award className="text-white" size={12} />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TLE Eliminators
            </h1>
            <p className="text-sm text-gray-300 font-medium">Elite Competitive Programming Hub</p>
            <p className="text-xs text-purple-400">Founded by ICPC World Finalist</p>
          </div>
        </div>
        <Button 
          onClick={onEnterApp}
          variant="outline" 
          className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Enter Platform <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in">
            {/* Founder Credentials Banner */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-purple-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Sparkles className="inline w-4 h-4 mr-2 text-yellow-400" />
                  {achievement}
                </div>
              ))}
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Eliminate TLE
              </span>
              <br />
              <span className="text-white text-shadow">Achieve ICPC Glory</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most advanced competitive programming platform, crafted by 
              <span className="text-yellow-400 font-semibold"> ICPC World Finalists</span> and 
              <span className="text-blue-400 font-semibold"> Google Engineers</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button 
                onClick={onEnterApp}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 animate-glow btn-glow"
              >
                <Play className="mr-4 w-8 h-8" />
                Start Your Journey to ICPC
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsDemoOpen(true)}
                className="border-3 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-16 py-6 text-2xl rounded-2xl transition-all duration-500 hover:scale-105 glass-effect"
              >
                Watch Live Demo
                <ChevronRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xl font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Enterprise-Grade Features
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Built with Google-level engineering standards and ICPC competition insights
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in card-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                      {feature.icon}
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-xs font-bold text-purple-300">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-2xl text-gray-300">From our elite community of competitive programmers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 animate-fade-in card-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs font-bold text-green-300">
                      {testimonial.achievement}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-white text-xl">{testimonial.name}</div>
                    <div className="text-purple-400 font-medium">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg border-white/20 card-glow">
            <CardContent className="p-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
                Ready to Join the Elite?
              </h2>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of competitive programmers who have transformed their journey with 
                <span className="text-yellow-400 font-bold"> ICPC-grade training</span> and 
                <span className="text-blue-400 font-bold"> Google-level analytics</span>.
              </p>
              <Button 
                onClick={onEnterApp}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white px-20 py-8 text-2xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 animate-glow"
              >
                <Zap className="mr-4 w-8 h-8" />
                Begin Your ICPC Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center animate-glow">
              <Code className="text-white" size={24} />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TLE Eliminators
            </span>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            Empowering the next generation of competitive programmers with world-class training and analytics.
          </p>
          <p className="text-gray-500 mb-4">
            Founded by ICPC World Finalist | Powered by Google-level Engineering
          </p>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>© 2024 TLE Eliminators. Eliminating TLE, one algorithm at a time.</span>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="sm:max-w-[800px] bg-gray-900 border-purple-500/50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-4">
              Live Platform Demo
            </DialogTitle>
          </DialogHeader>
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <div className="mb-6">
              <Play className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Interactive Demo Coming Soon
              </h3>
              <p className="text-gray-300">
                Experience the full power of TLE Eliminators with our comprehensive platform demo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Student Management System
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Real-time Analytics
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Contest Tracking
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Progress Insights
              </div>
            </div>
            <Button 
              onClick={onEnterApp}
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white"
            >
              Explore Live Platform Instead
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Landing;
