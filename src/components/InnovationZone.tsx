import React, { useState } from 'react';
import { Lightbulb, DollarSign, Users, Star, ArrowRight, Plus, Filter, Search } from 'lucide-react';

interface InnovationZoneProps {
  currentUser: any;
}

function InnovationZone({ currentUser }: InnovationZoneProps) {
  const [activeTab, setActiveTab] = useState('projects');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Learning Assistant',
      description: 'An intelligent tutoring system that adapts to individual learning styles and provides personalized feedback.',
      author: 'Emma Chen',
      category: 'AI/ML',
      fundingGoal: 25000,
      currentFunding: 12500,
      backers: 34,
      daysLeft: 42,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['AI', 'Education', 'Machine Learning', 'React']
    },
    {
      id: 2,
      title: 'Sustainable Campus Initiative',
      description: 'IoT-based system to monitor and reduce energy consumption in educational institutions.',
      author: 'Marcus Johnson',
      category: 'IoT/Sustainability',
      fundingGoal: 15000,
      currentFunding: 8200,
      backers: 28,
      daysLeft: 28,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['IoT', 'Sustainability', 'Arduino', 'Data Analytics']
    },
    {
      id: 3,
      title: 'Virtual Reality Language Learning',
      description: 'Immersive VR experiences for learning foreign languages through cultural interactions.',
      author: 'Sofia Rodriguez',
      category: 'VR/AR',
      fundingGoal: 35000,
      currentFunding: 28000,
      backers: 67,
      daysLeft: 15,
      image: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['VR', 'Language Learning', 'Unity', '3D Modeling']
    }
  ];

  const fundingRequests = [
    {
      id: 1,
      title: 'Blockchain-based Credential Verification',
      requester: 'David Park',
      amount: 5000,
      purpose: 'Research and development of secure academic credential system',
      progress: 65,
      supporters: 12
    },
    {
      id: 2,
      title: 'Mobile App for Rural Education',
      requester: 'Priya Patel',
      amount: 8000,
      purpose: 'Developing offline-capable educational content delivery',
      progress: 30,
      supporters: 8
    }
  ];

  const categories = ['All', 'AI/ML', 'IoT/Sustainability', 'VR/AR', 'Mobile Dev', 'Web Dev', 'Blockchain'];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Innovation Zone</h1>
            <p className="text-xl text-gray-600">Discover, fund, and collaborate on innovative projects</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Submit Project
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              {categories.slice(1).map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                activeTab === 'projects'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              Project Gallery
            </button>
            <button
              onClick={() => setActiveTab('funding')}
              className={`px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                activeTab === 'funding'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              Funding Requests
            </button>
            <button
              onClick={() => setActiveTab('collaboration')}
              className={`px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                activeTab === 'collaboration'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="w-4 h-4" />
              Collaborations
            </button>
          </nav>
        </div>

        <div className="p-8">
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.daysLeft} days left</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">by {project.author}</p>
                    
                    {/* Funding Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold text-green-600">
                          ${project.currentFunding.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">
                          {Math.round((project.currentFunding / project.fundingGoal) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(project.currentFunding / project.fundingGoal) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                        <span>Goal: ${project.fundingGoal.toLocaleString()}</span>
                        <span>{project.backers} backers</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Fund
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
                        <Users className="w-4 h-4" />
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'funding' && (
            <div className="space-y-6">
              {fundingRequests.map((request) => (
                <div key={request.id} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{request.title}</h3>
                      <p className="text-gray-600 mb-2">Requested by: {request.requester}</p>
                      <p className="text-gray-700 mb-4">{request.purpose}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-2xl font-bold text-green-600">${request.amount.toLocaleString()}</span>
                          <span className="text-sm text-gray-500">{request.progress}% funded</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-green-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${request.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{request.supporters} supporters</p>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 flex gap-2">
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                        Support
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'collaboration' && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Collaboration Hub</h3>
              <p className="text-gray-600 mb-6">Find team members and collaborate on exciting projects</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Start Collaborating
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900">Submit New Project</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your project title"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your project and its impact"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {categories.slice(1).map(category => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Funding Goal ($)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="25000"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-4">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Submit Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InnovationZone;