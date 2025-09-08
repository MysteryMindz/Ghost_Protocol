import React, { useState } from 'react';
import { User, Video, Users, Calendar, MessageCircle, Heart, Brain, Clock } from 'lucide-react';

interface MentorshipHubProps {
  currentUser: any;
}

function MentorshipHub({ currentUser }: MentorshipHubProps) {
  const [activeTab, setActiveTab] = useState('mentors');

  const mentors = [
    {
      id: 1,
      name: 'Nikil Allen R',
      expertise: 'Machine Learning & AI',
      rating: 4.9,
      sessions: 156,
      price: 50,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'Available today'
    },
    {
      id: 2,
      name: 'Mike Chen',
      expertise: 'Web Development',
      rating: 4.8,
      sessions: 203,
      price: 40,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'Available tomorrow'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      expertise: 'Data Science',
      rating: 4.9,
      sessions: 178,
      price: 55,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'Available now'
    }
  ];

  const workshops = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      instructor: 'Mike Chen',
      date: '2024-12-28',
      time: '2:00 PM EST',
      duration: '2 hours',
      participants: 24,
      maxParticipants: 30,
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      date: '2024-12-30',
      time: '3:00 PM EST',
      duration: '3 hours',
      participants: 18,
      maxParticipants: 25,
      level: 'Intermediate'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      mentor: 'Dr. Sarah Johnson',
      date: '2024-12-27',
      time: '10:00 AM',
      topic: 'Career Planning in AI',
      type: '1-on-1'
    },
    {
      id: 2,
      mentor: 'Mike Chen',
      date: '2024-12-28',
      time: '2:00 PM',
      topic: 'React Best Practices',
      type: 'Group Session'
    }
  ];

  const tabs = [
    { id: 'mentors', label: 'Find Mentors', icon: User },
    { id: 'workshops', label: 'Workshops', icon: Users },
    { id: 'sessions', label: 'My Sessions', icon: Calendar },
    { id: 'support', label: 'Mental Health', icon: Heart },
    { id: 'forum', label: 'Forum', icon: MessageCircle }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mentorship Hub</h1>
        <p className="text-xl text-gray-600">Connect with mentors, join workshops, and get the support you need</p>
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
          {activeTab === 'mentors' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                        <p className="text-sm text-gray-600">{mentor.expertise}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm font-medium">{mentor.rating}</span>
                          <span className="text-sm text-gray-500">({mentor.sessions} sessions)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-green-600">${mentor.price}/hr</span>
                        <span className="text-sm text-green-600">{mentor.availability}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                        <Video className="w-4 h-4" />
                        Book Session
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'workshops' && (
            <div className="space-y-6">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{workshop.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          workshop.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          workshop.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {workshop.level}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">Instructor: {workshop.instructor}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {workshop.date} at {workshop.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {workshop.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {workshop.participants}/{workshop.maxParticipants} participants
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                        Join Workshop
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Sessions</h3>
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{session.topic}</h4>
                      <p className="text-gray-600 mb-2">with {session.mentor}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{session.date} at {session.time}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{session.type}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        Join
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'support' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mental Health & Emotional Support</h3>
                <p className="text-gray-600">Your mental health matters. We're here to support your well-being.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Crisis Support</h4>
                  <p className="text-gray-600 mb-4">24/7 crisis hotline and immediate support resources</p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                    Get Help Now
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Counseling Sessions</h4>
                  <p className="text-gray-600 mb-4">Professional counselors available for one-on-one sessions</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Book Session
                  </button>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Support Groups</h4>
                  <p className="text-gray-600 mb-4">Join peer support groups and community discussions</p>
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-200">
                    Join Group
                  </button>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Wellness Resources</h4>
                  <p className="text-gray-600 mb-4">Meditation, mindfulness, and self-care resources</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'forum' && (
            <div>
              <div className="mb-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Ask Question
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "How to prepare for technical interviews?", author: "Alex M.", replies: 12, time: "2 hours ago" },
                  { title: "Best resources for learning React?", author: "Sarah K.", replies: 8, time: "4 hours ago" },
                  { title: "Transitioning from academia to industry", author: "Mike L.", replies: 15, time: "6 hours ago" }
                ].map((post, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>by {post.author}</span>
                      <div className="flex items-center gap-4">
                        <span>{post.replies} replies</span>
                        <span>{post.time}</span>
                      </div>
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

export default MentorshipHub;