import React, { useState } from 'react';
import { MessageSquare, Video, Phone, Send, Search, MoreVertical, Calendar, Users } from 'lucide-react';

interface MessagingHubProps {
  currentUser: any;
}

function MessagingHub({ currentUser }: MessagingHubProps) {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      type: 'Mentor',
      lastMessage: 'Great progress on your ML project! Let\'s schedule a review session.',
      time: '2 min ago',
      unread: 2,
      online: true,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Study Group - React',
      type: 'Group',
      lastMessage: 'Mike: Has anyone tried the new hooks approach?',
      time: '15 min ago',
      unread: 5,
      online: false,
      avatar: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'TechCorp Foundation',
      type: 'Sponsor',
      lastMessage: 'We\'d like to discuss your funding application.',
      time: '1 hour ago',
      unread: 1,
      online: true,
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Alex Chen',
      type: 'Student',
      lastMessage: 'Thanks for the study notes!',
      time: '3 hours ago',
      unread: 0,
      online: false,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Sarah Johnson',
      content: 'Hi! I\'ve reviewed your latest assignment. Overall great work!',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you! I was particularly proud of the algorithm optimization section.',
      time: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Dr. Sarah Johnson',
      content: 'Yes, that was excellent! The time complexity analysis was spot on. I have a few suggestions for the next phase.',
      time: '10:35 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'I\'d love to hear your suggestions. Should we schedule a call?',
      time: '10:36 AM',
      isOwn: true
    },
    {
      id: 5,
      sender: 'Dr. Sarah Johnson',
      content: 'Great progress on your ML project! Let\'s schedule a review session.',
      time: '10:38 AM',
      isOwn: false
    }
  ];

  const upcomingCalls = [
    {
      id: 1,
      title: 'ML Project Review',
      participant: 'Dr. Sarah Johnson',
      time: 'Today, 2:00 PM',
      type: 'video'
    },
    {
      id: 2,
      title: 'Study Group Session',
      participant: 'React Study Group',
      time: 'Tomorrow, 10:00 AM',
      type: 'video'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage('');
    }
  };

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Messages</h1>
        <p className="text-xl text-gray-600">Stay connected with mentors, peers, and supporters</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Search */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Conversations</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors duration-200 ${
                    selectedChat === conversation.id ? 'bg-blue-50 border-r-2 border-blue-600' : ''
                  }`}
                >
                  <div className="relative">
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900 truncate">{conversation.name}</h4>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-blue-600 font-medium">{conversation.type}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Calls */}
          <div className="bg-white rounded-2xl shadow-lg mt-6">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Upcoming Calls</h3>
            </div>
            <div className="p-4 space-y-3">
              {upcomingCalls.map((call) => (
                <div key={call.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 text-sm">{call.title}</h4>
                  <p className="text-xs text-gray-600">{call.participant}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">{call.time}</span>
                    <button className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700 transition-colors duration-200">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-lg h-[600px] flex flex-col">
            {/* Chat Header */}
            {selectedConversation && (
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={selectedConversation.avatar}
                      alt={selectedConversation.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {selectedConversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedConversation.name}</h3>
                    <p className="text-sm text-gray-500">
                      {selectedConversation.online ? 'Online' : 'Last seen 1 hour ago'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <Calendar className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.isOwn
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 ${message.isOwn ? 'text-right' : 'text-left'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagingHub;