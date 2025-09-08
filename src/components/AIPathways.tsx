import React, { useState } from 'react';
import { Brain, TrendingUp, Target, BookOpen, Users, Star, ArrowRight, Lightbulb, BarChart, CheckCircle } from 'lucide-react';

interface AIPathwaysProps {
  currentUser: any;
}

function AIPathways({ currentUser }: AIPathwaysProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const interests = [
    'Artificial Intelligence', 'Web Development', 'Data Science', 'Mobile Development',
    'Cybersecurity', 'Cloud Computing', 'Machine Learning', 'Blockchain',
    'UI/UX Design', 'DevOps', 'Game Development', 'IoT'
  ];

  const recommendations = [
    {
      id: 1,
      title: 'Full-Stack AI Developer',
      match: 95,
      description: 'Combine AI/ML expertise with full-stack development skills',
      skills: ['Python', 'TensorFlow', 'React', 'Node.js', 'Docker'],
      salary: '$120K - $180K',
      growth: '+34%',
      courses: [
        'Machine Learning Fundamentals',
        'React Development Masterclass',
        'Python for AI'
      ],
      mentors: [
        { name: 'Dr. Sarah Johnson', expertise: 'AI/ML' },
        { name: 'Mike Chen', expertise: 'Full-Stack' }
      ]
    },
    {
      id: 2,
      title: 'Data Science Engineer',
      match: 87,
      description: 'Analyze complex data to drive business insights and decisions',
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Statistics'],
      salary: '$95K - $150K',
      growth: '+28%',
      courses: [
        'Data Science with Python',
        'Statistical Analysis',
        'Data Visualization'
      ],
      mentors: [
        { name: 'Dr. Emily Davis', expertise: 'Data Science' },
        { name: 'Alex Rodriguez', expertise: 'Analytics' }
      ]
    },
    {
      id: 3,
      title: 'AI Product Manager',
      match: 78,
      description: 'Lead AI product development and strategy initiatives',
      skills: ['Product Strategy', 'AI/ML', 'Agile', 'Leadership'],
      salary: '$130K - $200K',
      growth: '+25%',
      courses: [
        'AI for Product Managers',
        'Strategic Product Management',
        'Leadership Fundamentals'
      ],
      mentors: [
        { name: 'Lisa Wang', expertise: 'Product Management' },
        { name: 'John Miller', expertise: 'AI Strategy' }
      ]
    }
  ];

  const learningPath = [
    {
      phase: 'Foundation',
      duration: '2-3 months',
      skills: ['Programming Basics', 'Math Foundations', 'Problem Solving'],
      status: 'completed',
      courses: ['Python Fundamentals', 'Statistics Basics', 'Logic & Algorithms']
    },
    {
      phase: 'Core Skills',
      duration: '4-6 months',
      skills: ['Machine Learning', 'Data Analysis', 'Web Development'],
      status: 'in-progress',
      courses: ['ML Fundamentals', 'Data Science with Python', 'React Basics']
    },
    {
      phase: 'Specialization',
      duration: '3-4 months',
      skills: ['Deep Learning', 'Advanced ML', 'System Design'],
      status: 'upcoming',
      courses: ['Neural Networks', 'MLOps', 'System Architecture']
    },
    {
      phase: 'Professional',
      duration: '2-3 months',
      skills: ['Portfolio Projects', 'Interview Prep', 'Industry Skills'],
      status: 'upcoming',
      courses: ['Capstone Projects', 'Technical Interviews', 'Industry Best Practices']
    }
  ];

  const marketTrends = [
    {
      skill: 'Artificial Intelligence',
      demand: 92,
      growth: '+45%',
      avgSalary: '$140K',
      jobs: '25K+'
    },
    {
      skill: 'Machine Learning',
      demand: 88,
      growth: '+38%',
      avgSalary: '$125K',
      jobs: '18K+'
    },
    {
      skill: 'Data Science',
      demand: 85,
      growth: '+32%',
      avgSalary: '$115K',
      jobs: '22K+'
    },
    {
      skill: 'Cloud Computing',
      demand: 82,
      growth: '+28%',
      avgSalary: '$110K',
      jobs: '30K+'
    },
    {
      skill: 'Cybersecurity',
      demand: 79,
      growth: '+25%',
      avgSalary: '$105K',
      jobs: '15K+'
    }
  ];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const generateRecommendations = () => {
    if (selectedInterests.length > 0) {
      setShowRecommendations(true);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>;
      default:
        return <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-50 border-green-200';
      case 'in-progress': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">AI Career Pathways</h1>
        </div>
        <p className="text-xl text-gray-600">Get personalized career recommendations powered by AI and market data</p>
      </div>

      {!showRecommendations ? (
        /* Interest Selection */
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">What interests you?</h3>
          <p className="text-gray-600 mb-8">Select your areas of interest to get personalized career recommendations</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedInterests.includes(interest)
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-sm font-medium text-center">{interest}</div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={generateRecommendations}
              disabled={selectedInterests.length === 0}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              <Lightbulb className="w-5 h-5" />
              Generate Career Recommendations
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Selected: {selectedInterests.length} {selectedInterests.length === 1 ? 'interest' : 'interests'}
            </p>
          </div>
        </div>
      ) : (
        /* Recommendations Dashboard */
        <div className="space-y-8">
          {/* Recommended Career Paths */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Recommended Career Paths</h3>
              <p className="text-gray-600">Based on your interests: {selectedInterests.join(', ')}</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">{rec.title}</h4>
                          <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                            <Target className="w-4 h-4" />
                            {rec.match}% match
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{rec.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Salary Range</h5>
                            <p className="text-green-600 font-bold">{rec.salary}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Job Growth</h5>
                            <p className="text-blue-600 font-bold">{rec.growth}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Key Skills</h5>
                            <div className="flex flex-wrap gap-1">
                              {rec.skills.slice(0, 3).map((skill, index) => (
                                <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                                  {skill}
                                </span>
                              ))}
                              {rec.skills.length > 3 && (
                                <span className="text-gray-500 text-xs">+{rec.skills.length - 3} more</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        View Learning Path
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Find Mentors
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your Learning Path</h3>
              <p className="text-gray-600">Personalized roadmap to achieve your career goals</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                {learningPath.map((phase, index) => (
                  <div key={index} className={`rounded-xl p-6 border-2 ${getStatusColor(phase.status)}`}>
                    <div className="flex items-start gap-4">
                      {getStatusIcon(phase.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{phase.phase}</h4>
                          <span className="text-sm text-gray-500">{phase.duration}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Skills to Learn</h5>
                            <div className="flex flex-wrap gap-1">
                              {phase.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Recommended Courses</h5>
                            <div className="space-y-1">
                              {phase.courses.map((course, courseIndex) => (
                                <div key={courseIndex} className="text-sm text-blue-600">• {course}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills in Demand */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Skills in Demand</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {marketTrends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900">{trend.skill}</span>
                          <span className="text-sm text-green-600 font-medium">{trend.growth}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${trend.demand}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{trend.avgSalary} avg salary</span>
                          <span>{trend.jobs} open positions</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Insights */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Industry Insights</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">AI/ML Market</h4>
                    <p className="text-sm text-gray-700 mb-2">The AI market is expected to grow at 37.3% CAGR through 2030</p>
                    <div className="text-2xl font-bold text-blue-600">$1.8T</div>
                    <div className="text-sm text-gray-500">Market size by 2030</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Job Outlook</h4>
                    <p className="text-sm text-gray-700 mb-2">Data science jobs projected to grow 35% by 2032</p>
                    <div className="text-2xl font-bold text-green-600">2.7M</div>
                    <div className="text-sm text-gray-500">New jobs expected</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Skills Gap</h4>
                    <p className="text-sm text-gray-700 mb-2">87% of companies report skill shortages in tech</p>
                    <div className="text-2xl font-bold text-purple-600">High</div>
                    <div className="text-sm text-gray-500">Opportunity level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-6 opacity-90">
              Take the first step towards your dream career in tech
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Start Learning
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Find a Mentor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIPathways;