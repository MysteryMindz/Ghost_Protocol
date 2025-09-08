import React, { useState } from 'react';
import { DollarSign, User, Calendar, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface FundingRequestsProps {
  currentUser: any;
}

function FundingRequests({ currentUser }: FundingRequestsProps) {
  const [activeTab, setActiveTab] = useState('browse');
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const fundingRequests = [
    {
      id: 1,
      studentName: 'Maria Rodriguez',
      title: 'Computer Science Degree Support',
      description: 'First-generation college student seeking support for CS degree. Strong academic record with 3.8 GPA.',
      amount: 15000,
      annualIncome: 25000,
      purpose: 'Tuition, books, and living expenses',
      urgency: 'High',
      location: 'Phoenix, AZ',
      gpa: 3.8,
      status: 'Active',
      progress: 45,
      supporters: 12,
      timeRemaining: 45,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      studentName: 'James Kim',
      title: 'Engineering Equipment Fund',
      description: 'Need funding for specialized engineering equipment and software for senior capstone project.',
      amount: 8000,
      annualIncome: 18000,
      purpose: 'Engineering equipment and software licenses',
      urgency: 'Medium',
      location: 'Austin, TX',
      gpa: 3.6,
      status: 'Active',
      progress: 78,
      supporters: 18,
      timeRemaining: 22,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      studentName: 'Aisha Patel',
      title: 'Medical School Preparation',
      description: 'Pre-med student needs support for MCAT prep courses and medical school application fees.',
      amount: 5000,
      annualIncome: 22000,
      purpose: 'MCAT prep, application fees, interview travel',
      urgency: 'High',
      location: 'Denver, CO',
      gpa: 3.9,
      status: 'Active',
      progress: 30,
      supporters: 8,
      timeRemaining: 60,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const myApplications = [
    {
      id: 1,
      title: 'Graduate School Support Request',
      amount: 12000,
      status: 'Under Review',
      submitDate: '2024-12-15',
      progress: 25,
      supporters: 5
    },
    {
      id: 2,
      title: 'Research Equipment Fund',
      amount: 3500,
      status: 'Approved',
      submitDate: '2024-11-20',
      progress: 100,
      supporters: 14
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Under Review': return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'Active': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Funding Requests</h1>
            <p className="text-xl text-gray-600">Support students' educational journeys through transparent funding</p>
          </div>
          {currentUser?.type === 'student' && (
            <button
              onClick={() => setShowApplicationModal(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Apply for Funding
            </button>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                activeTab === 'browse'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              Browse Requests
            </button>
            {currentUser?.type === 'student' && (
              <button
                onClick={() => setActiveTab('my-applications')}
                className={`px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'my-applications'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <User className="w-4 h-4" />
                My Applications
              </button>
            )}
            {(currentUser?.type === 'sponsor' || currentUser?.type === 'teacher') && (
              <button
                onClick={() => setActiveTab('my-contributions')}
                className={`px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'my-contributions'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                My Contributions
              </button>
            )}
          </nav>
        </div>

        <div className="p-8">
          {activeTab === 'browse' && (
            <div className="space-y-8">
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">247</div>
                  <div className="text-blue-800">Active Requests</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">$2.4M</div>
                  <div className="text-green-800">Funds Raised</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,234</div>
                  <div className="text-purple-800">Students Supported</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">89%</div>
                  <div className="text-yellow-800">Success Rate</div>
                </div>
              </div>

              {/* Funding Requests */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {fundingRequests.map((request) => (
                  <div key={request.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={request.image}
                        alt={request.studentName}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{request.title}</h3>
                        <p className="text-gray-600 mb-2">by {request.studentName}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>GPA: {request.gpa}</span>
                          <span>{request.location}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                            {request.urgency} Priority
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{request.description}</p>

                    {/* Funding Details */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Requested Amount:</span>
                          <div className="text-2xl font-bold text-green-600">${request.amount.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Annual Income:</span>
                          <div className="text-lg font-semibold text-gray-900">${request.annualIncome.toLocaleString()}</div>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-500">Purpose:</span>
                          <div className="font-medium text-gray-900">{request.purpose}</div>
                        </div>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{request.progress}% funded</span>
                        <span className="text-sm text-gray-500">{request.timeRemaining} days left</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${request.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{request.supporters} supporters</div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                        Support Now
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'my-applications' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-900">My Applications</h3>
                <button
                  onClick={() => setShowApplicationModal(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  New Application
                </button>
              </div>

              {myApplications.map((application) => (
                <div key={application.id} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(application.status)}
                      <h4 className="text-xl font-semibold text-gray-900">{application.title}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      application.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {application.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Amount Requested</span>
                      <div className="text-lg font-semibold text-gray-900">${application.amount.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Submit Date</span>
                      <div className="text-lg font-semibold text-gray-900">{application.submitDate}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Progress</span>
                      <div className="text-lg font-semibold text-gray-900">{application.progress}%</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Supporters</span>
                      <div className="text-lg font-semibold text-gray-900">{application.supporters}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      View Details
                    </button>
                    {application.status === 'Under Review' && (
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        Edit Application
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'my-contributions' && (
            <div className="text-center py-12">
              <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">My Contributions</h3>
              <p className="text-gray-600 mb-6">Track your impact and contributions to student success</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
                View Contribution History
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900">Apply for Funding</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Request Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Brief title for your funding request"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Amount Needed ($)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="15000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Income ($)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="25000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Purpose</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Explain how the funding will be used and its impact on your education"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">GPA</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="3.8"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Priority Level</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-4">
              <button
                onClick={() => setShowApplicationModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FundingRequests;