import React from 'react';
import { TrendingUp, Users, DollarSign, BookOpen, Award, Globe, Heart, Target } from 'lucide-react';

function ImpactDashboard() {
  const stats = [
    {
      title: 'Students Supported',
      value: '12,847',
      change: '+23%',
      changeType: 'increase',
      icon: Users,
      color: 'blue',
      description: 'Active learners on the platform'
    },
    {
      title: 'Funds Disbursed',
      value: '$5.2M',
      change: '+18%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'green',
      description: 'Total funding provided to students'
    },
    {
      title: 'Projects Funded',
      value: '1,234',
      change: '+31%',
      changeType: 'increase',
      icon: Target,
      color: 'purple',
      description: 'Innovative projects brought to life'
    },
    {
      title: 'Course Completions',
      value: '8,956',
      change: '+12%',
      changeType: 'increase',
      icon: BookOpen,
      color: 'orange',
      description: 'Courses successfully completed'
    },
    {
      title: 'Average Course Rating',
      value: '4.8',
      change: '+0.2',
      changeType: 'increase',
      icon: Award,
      color: 'yellow',
      description: 'Student satisfaction rating'
    },
    {
      title: 'Global Reach',
      value: '67',
      change: '+8',
      changeType: 'increase',
      icon: Globe,
      color: 'indigo',
      description: 'Countries with active users'
    }
  ];

  const impactStories = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      story: 'From struggling single mother to software engineer',
      impact: 'Secured $80K job after completing our ML course',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Career Transformation'
    },
    {
      id: 2,
      name: 'James Kim',
      story: 'First-generation college student building AI solutions',
      impact: 'Raised $50K for his healthcare AI startup',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Innovation'
    },
    {
      id: 3,
      name: 'Aisha Patel',
      story: 'Rural student accessing world-class education',
      impact: 'Accepted to top medical school with full scholarship',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Educational Access'
    }
  ];

  const monthlyData = [
    { month: 'Jan', students: 820, funding: 420000, courses: 156 },
    { month: 'Feb', students: 950, funding: 380000, courses: 189 },
    { month: 'Mar', students: 1100, funding: 520000, courses: 245 },
    { month: 'Apr', students: 1250, funding: 480000, courses: 298 },
    { month: 'May', students: 1380, funding: 620000, courses: 334 },
    { month: 'Jun', students: 1520, funding: 580000, courses: 378 }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; icon: string } } = {
      blue: { bg: 'from-blue-50 to-blue-100', text: 'text-blue-600', icon: 'text-blue-600' },
      green: { bg: 'from-green-50 to-green-100', text: 'text-green-600', icon: 'text-green-600' },
      purple: { bg: 'from-purple-50 to-purple-100', text: 'text-purple-600', icon: 'text-purple-600' },
      orange: { bg: 'from-orange-50 to-orange-100', text: 'text-orange-600', icon: 'text-orange-600' },
      yellow: { bg: 'from-yellow-50 to-yellow-100', text: 'text-yellow-600', icon: 'text-yellow-600' },
      indigo: { bg: 'from-indigo-50 to-indigo-100', text: 'text-indigo-600', icon: 'text-indigo-600' },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Impact Dashboard</h1>
        <p className="text-xl text-gray-600">Measuring our collective impact on educational equity and opportunity</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colors = getColorClasses(stat.color);
          
          return (
            <div key={index} className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 shadow-lg border border-gray-100`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white shadow-sm`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  stat.changeType === 'increase' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </div>
              </div>
              
              <div className="mb-2">
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>{stat.value}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Growth Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Growth Trends</h3>
          <div className="space-y-6">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600 font-medium w-12">{data.month}</span>
                <div className="flex-1 mx-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(data.students / 1600) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-16 text-right">
                      {data.students}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-500 text-center">
            Monthly Student Enrollments
          </div>
        </div>

        {/* Funding Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Funding Distribution</h3>
          <div className="space-y-4">
            {[
              { category: 'Tuition Support', amount: '45%', color: 'bg-blue-600' },
              { category: 'Project Funding', amount: '25%', color: 'bg-green-600' },
              { category: 'Equipment & Tools', amount: '15%', color: 'bg-purple-600' },
              { category: 'Living Expenses', amount: '10%', color: 'bg-orange-600' },
              { category: 'Other', amount: '5%', color: 'bg-gray-600' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded ${item.color}`}></div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-gray-700">{item.category}</span>
                  <span className="font-semibold text-gray-900">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">$5.2M</div>
              <div className="text-sm text-gray-600">Total Disbursed This Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-semibold text-gray-900">Success Stories</h3>
          </div>
          <p className="text-gray-600">Real impact from our community members</p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story) => (
              <div key={story.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <span className="text-sm text-blue-600 font-medium">{story.category}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 font-medium">{story.story}</p>
                <p className="text-sm text-green-600 font-semibold">{story.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
        <p className="text-xl mb-6 opacity-90">
          Together, we're building a future where every student has access to quality education and opportunities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Become a Mentor
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
            Support Students
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImpactDashboard;