import React from 'react';
import { ArrowRight, Users, BookOpen, TrendingUp, Heart, Shield, Award } from 'lucide-react';
import { UserType } from '../App';

interface LandingPageProps {
  onUserTypeSelect: (userType: UserType) => void;
}

function LandingPage({ onUserTypeSelect }: LandingPageProps) {
  const features = [
    {
      icon: Heart,
      title: 'Mentorship Hub',
      description: 'Connect with experienced mentors for personalized guidance and support'
    },
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Access courses, workshops, and resources tailored to your goals'
    },
    {
      icon: TrendingUp,
      title: 'Funding Support',
      description: 'Get financial assistance for your educational journey and projects'
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Join a vibrant community of learners, teachers, and supporters'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure platform with built-in safety and moderation features'
    },
    {
      icon: Award,
      title: 'Track Progress',
      description: 'Monitor your learning journey with comprehensive analytics'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Supported' },
    { number: '2K+', label: 'Expert Mentors' },
    { number: '$5M+', label: 'Funds Disbursed' },
    { number: '500+', label: 'Projects Funded' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              GP<span className="text-yellow-400">link</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-light">
              From Dreams to Careers
            </p>
            <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Bridging the opportunity gap in education through mentorship, funding, and community support
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => onUserTypeSelect('student')}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl min-w-[200px] flex items-center justify-center gap-2"
              >
                Join as Student
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onUserTypeSelect('teacher')}
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl min-w-[200px] flex items-center justify-center gap-2"
              >
                Join as Teacher
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onUserTypeSelect('sponsor')}
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl min-w-[200px] flex items-center justify-center gap-2"
              >
                Join as Sponsor
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Empowering Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides everything needed to bridge educational gaps and create opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            GPlink is committed to democratizing education by connecting students with mentors, 
            resources, and funding opportunities. We believe every student deserves access to 
            quality education and the support needed to achieve their dreams.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">
            <p className="text-lg text-white font-medium">
              "Education is the most powerful weapon which you can use to change the world." 
              <br />
              <span className="text-blue-200">- Nelson Mandela</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;