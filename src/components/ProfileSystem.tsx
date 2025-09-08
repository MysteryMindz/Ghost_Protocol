import React, { useState } from 'react';
import { Edit3, MapPin, Calendar, Award, Shield, Star } from 'lucide-react';
import { User, UserType } from '../App';

interface ProfileSystemProps {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

function ProfileSystem({ currentUser, setCurrentUser }: ProfileSystemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: currentUser?.name || '',
    bio: currentUser?.bio || '',
    skills: '',
    location: '',
    experience: ''
  });

  const handleSave = () => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        name: editForm.name,
        bio: editForm.bio
      });
    }
    setIsEditing(false);
  };

  const getProfileSpecificContent = () => {
    switch (currentUser?.type) {
      case 'student':
        return {
          title: 'Student Profile',
          color: 'blue',
          stats: [
            { label: 'Courses Completed', value: '12' },
            { label: 'Hours Learned', value: '248' },
            { label: 'Projects', value: '6' },
            { label: 'Mentorship Sessions', value: '24' }
          ],
          badges: ['JavaScript', 'React', 'Machine Learning', 'Data Science'],
          achievements: [
            'Completed AI Fundamentals Course',
            'Won Hackathon 2024',
            'Top Student of the Month',
            '100 Hours of Learning'
          ]
        };
      case 'teacher':
        return {
          title: 'Teacher Profile',
          color: 'green',
          stats: [
            { label: 'Students Taught', value: '156' },
            { label: 'Courses Created', value: '8' },
            { label: 'Average Rating', value: '4.9' },
            { label: 'Hours Teaching', value: '420' }
          ],
          badges: ['Expert in AI', 'Course Creator', 'Mentor', 'Verified Teacher'],
          achievements: [
            'Teacher of the Year 2024',
            'Created Top-Rated Course',
            '1000+ Students Impacted',
            'Expert Certification in AI'
          ]
        };
      case 'sponsor':
        return {
          title: 'Sponsor Profile',
          color: 'purple',
          stats: [
            { label: 'Students Funded', value: '89' },
            { label: 'Projects Sponsored', value: '23' },
            { label: 'Total Funded', value: '$125K' },
            { label: 'Success Rate', value: '94%' }
          ],
          badges: ['Education Partner', 'Innovation Supporter', 'Community Builder', 'Verified Sponsor'],
          achievements: [
            'Funded 100+ Students',
            'Supporting Innovation',
            'Community Impact Award',
            'Verified Corporate Partner'
          ]
        };
      default:
        return {
          title: 'Profile',
          color: 'gray',
          stats: [],
          badges: [],
          achievements: []
        };
    }
  };

  if (!currentUser) {
    return <div>No user profile available</div>;
  }

  const profileContent = getProfileSpecificContent();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className={`bg-gradient-to-r from-${profileContent.color}-600 to-${profileContent.color}-700 px-8 py-12 relative`}>
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
          
          <div className="flex items-start gap-6">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-24 h-24 rounded-full border-4 border-white/20 shadow-xl"
            />
            <div className="flex-1 text-white">
              <h1 className="text-3xl font-bold mb-2">{currentUser.name}</h1>
              <p className="text-xl opacity-90 mb-4 capitalize">{currentUser.type}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined Dec 2023</span>
                </div>
                {currentUser.verified && (
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded">
                    <Shield className="w-4 h-4" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {isEditing ? (
            /* Edit Form */
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            /* Profile Display */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                  <p className="text-gray-700 leading-relaxed">{currentUser.bio}</p>
                </div>

                {/* Skills/Badges */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileContent.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 bg-${profileContent.color}-100 text-${profileContent.color}-800 rounded-full text-sm font-medium`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h3>
                  <div className="space-y-3">
                    {profileContent.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                        <Award className="w-5 h-5 text-yellow-600" />
                        <span className="text-gray-800">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
                  <div className="space-y-4">
                    {profileContent.stats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{stat.label}</span>
                        <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">4.9</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Based on 124 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileSystem;