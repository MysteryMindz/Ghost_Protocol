import React, { useState } from 'react';
import { Users, BookOpen, Heart, TrendingUp, MessageSquare, Brain, Shield, Award } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import ProfileSystem from './components/ProfileSystem';
import MentorshipHub from './components/MentorshipHub';
import InnovationZone from './components/InnovationZone';
import FundingRequests from './components/FundingRequests';
import MessagingHub from './components/MessagingHub';
import CoursesLearning from './components/CoursesLearning';
import ImpactDashboard from './components/ImpactDashboard';
import AIPathways from './components/AIPathways';

export type UserType = 'student' | 'teacher' | 'sponsor';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  avatar: string;
  bio: string;
  verified: boolean;
}

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const navigationItems = [
    { id: 'profile', label: 'Profile', icon: Users },
    { id: 'mentorship', label: 'Mentorship', icon: Heart },
    { id: 'innovation', label: 'Innovation', icon: Brain },
    { id: 'funding', label: 'Funding', icon: TrendingUp },
    { id: 'messaging', label: 'Messages', icon: MessageSquare },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'impact', label: 'Impact', icon: Award },
    { id: 'pathways', label: 'AI Pathways', icon: Brain },
  ];

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
      case 'profile':
        return <ProfileSystem currentUser={currentUser} setCurrentUser={setCurrentUser} />;
      case 'mentorship':
        return <MentorshipHub currentUser={currentUser} />;
      case 'innovation':
        return <InnovationZone currentUser={currentUser} />;
      case 'funding':
        return <FundingRequests currentUser={currentUser} />;
      case 'messaging':
        return <MessagingHub currentUser={currentUser} />;
      case 'courses':
        return <CoursesLearning currentUser={currentUser} />;
      case 'impact':
        return <ImpactDashboard />;
      case 'pathways':
        return <AIPathways currentUser={currentUser} />;
      default:
        return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
    }
  };

  const handleUserTypeSelect = (userType: UserType) => {
    // Mock user creation for demo
    const mockUser: User = {
      id: '1',
      name: userType === 'student' ? 'Alex Chen' : userType === 'teacher' ? 'Dr. Sarah Wilson' : 'TechCorp Foundation',
      email: `${userType}@example.com`,
      type: userType,
      avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400`,
      bio: userType === 'student' 
        ? 'Computer Science student passionate about AI and machine learning'
        : userType === 'teacher'
        ? 'Experienced educator with 10+ years in technology education'
        : 'Corporate foundation focused on educational equity and opportunity',
      verified: true
    };
    
    setCurrentUser(mockUser);
    setCurrentPage('profile');
  };

  if (currentPage === 'landing') {
    return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation 
        items={navigationItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        currentUser={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          setCurrentPage('landing');
        }}
      />
      <main className="ml-64 p-8">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;