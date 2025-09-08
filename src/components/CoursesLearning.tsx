import React, { useState } from 'react';
import { BookOpen, Play, Clock, Star, Users, Award, Filter, Search, CheckCircle, BarChart } from 'lucide-react';

interface CoursesLearningProps {
  currentUser: any;
}

function CoursesLearning({ currentUser }: CoursesLearningProps) {
  const [activeTab, setActiveTab] = useState('all-courses');
  
  const courses = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      description: 'Learn the core concepts of machine learning, from basic algorithms to neural networks.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      students: 2847,
      duration: '12 weeks',
      level: 'Intermediate',
      price: 89,
      category: 'AI/ML',
      progress: 0,
      modules: 24,
      completedModules: 0
    },
    {
      id: 2,
      title: 'React Development Masterclass',
      instructor: 'Mike Chen',
      description: 'Master React development from basics to advanced patterns and best practices.',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      students: 1923,
      duration: '8 weeks',
      level: 'Beginner',
      price: 59,
      category: 'Web Development',
      progress: 0,
      modules: 18,
      completedModules: 0
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Dr. Emily Davis',
      description: 'Comprehensive data science course covering Python, pandas, visualization, and statistics.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      students: 3156,
      duration: '16 weeks',
      level: 'Intermediate',
      price: 99,
      category: 'Data Science',
      progress: 0,
      modules: 32,
      completedModules: 0
    }
  ];

  const myCourses = [
    {
      ...courses[0],
      progress: 65,
      completedModules: 16,
      enrolledDate: '2024-11-15',
      lastAccessed: '2 hours ago'
    },
    {
      ...courses[1],
      progress: 30,
      completedModules: 5,
      enrolledDate: '2024-12-01',
      lastAccessed: '1 day ago'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Fast Learner',
      description: 'Completed 5 modules in one week',
      icon: '⚡',
      earned: true,
      date: '2024-12-20'
    },
    {
      id: 2,
      title: 'Perfect Score',
      description: 'Scored 100% on a quiz',
      icon: '🎯',
      earned: true,
      date: '2024-12-18'
    },
    {
      id: 3,
      title: 'Study Streak',
      description: 'Studied for 7 consecutive days',
      icon: '🔥',
      earned: false,
      progress: 5
    },
    {
      id: 4,
      title: 'Course Completion',
      description: 'Complete your first course',
      icon: '🏆',
      earned: false,
      progress: 65
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'all-courses', label: 'All Courses', icon: BookOpen },
    { id: 'my-courses', label: 'My Courses', icon: Play },
    { id: 'progress', label: 'Progress', icon: BarChart },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses & Learning</h1>
        <p className="text-xl text-gray-600">Enhance your skills with interactive courses and track your progress</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>AI/ML</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Mobile Development</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-8">
          {activeTab === 'all-courses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {course.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    <p className="text-sm text-gray-500 mb-4">by {course.instructor}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">${course.price}</span>
                      <span className="text-sm text-gray-500">{course.modules} modules</span>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'my-courses' && (
            <div className="space-y-6">
              {myCourses.map((course) => (
                <div key={course.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                          <p className="text-gray-600 mb-2">by {course.instructor}</p>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Continue
                        </button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Progress</span>
                          <div className="font-semibold text-gray-900">{course.progress}%</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Completed</span>
                          <div className="font-semibold text-gray-900">{course.completedModules}/{course.modules}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Enrolled</span>
                          <div className="font-semibold text-gray-900">{course.enrolledDate}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Last Accessed</span>
                          <div className="font-semibold text-gray-900">{course.lastAccessed}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Course Progress</span>
                          <span className="text-sm text-gray-500">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-white transition-colors duration-200">
                          View Syllabus
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-white transition-colors duration-200">
                          Download Resources
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-8">
              {/* Overall Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-blue-800">Courses Enrolled</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">21</div>
                  <div className="text-green-800">Modules Completed</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">48</div>
                  <div className="text-purple-800">Hours Learned</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">4.8</div>
                  <div className="text-yellow-800">Avg Quiz Score</div>
                </div>
              </div>

              {/* Learning Streak */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Streak</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">🔥</div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">5 days</div>
                    <div className="text-gray-600">Current streak</div>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-sm text-gray-500 mb-1">{day}</div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index < 5 ? 'bg-orange-500 text-white' : 'bg-gray-200'
                      }`}>
                        {index < 5 ? '✓' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Progress Details */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Progress Details</h3>
                <div className="space-y-6">
                  {myCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{course.title}</h4>
                        <span className="text-sm text-gray-500">{course.completedModules}/{course.modules} modules</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{course.progress}% complete</span>
                        <span>Last accessed: {course.lastAccessed}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Achievements</h3>
                <p className="text-gray-600">Earn badges and track your learning milestones</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`rounded-xl p-6 border-2 transition-all duration-300 ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300'
                        : 'bg-gray-50 border-gray-200 opacity-75'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <h4 className={`font-semibold text-lg mb-2 ${
                        achievement.earned ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm mb-4 ${
                        achievement.earned ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>

                      {achievement.earned ? (
                        <div className="flex items-center justify-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Earned on {achievement.date}</span>
                        </div>
                      ) : (
                        <div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${achievement.progress || 0}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {achievement.progress || 0}% complete
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoursesLearning;