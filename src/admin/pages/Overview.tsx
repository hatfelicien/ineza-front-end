import React from 'react';
import { FaUserGraduate, FaHandshake, FaEnvelope, FaBookOpen } from 'react-icons/fa';
import { MdPeople, MdPhoto, MdTrendingUp } from 'react-icons/md';

const stats = [
  { label: 'Total Messages', value: 48, icon: <FaEnvelope className="w-6 h-6" />, color: 'bg-blue-500', change: '+5 this week' },
  { label: 'Blog Posts', value: 6, icon: <FaBookOpen className="w-6 h-6" />, color: 'bg-primary', change: '+1 this month' },
  { label: 'Team Members', value: 12, icon: <MdPeople className="w-6 h-6" />, color: 'bg-orange', change: 'No change' },
  { label: 'Gallery Items', value: 24, icon: <MdPhoto className="w-6 h-6" />, color: 'bg-accent', change: '+3 this week' },
  { label: 'Subscribers', value: 320, icon: <FaEnvelope className="w-6 h-6" />, color: 'bg-secondary', change: '+18 this month' },
  { label: 'Volunteers', value: 45, icon: <FaHandshake className="w-6 h-6" />, color: 'bg-gold', change: '+2 this week' },
  { label: 'Students Reached', value: 2500, icon: <FaUserGraduate className="w-6 h-6" />, color: 'bg-primary', change: 'All time' },
  { label: 'Communities', value: 50, icon: <MdTrendingUp className="w-6 h-6" />, color: 'bg-orange', change: 'All time' },
];

const recentMessages = [
  { name: 'Alice Mutoni', email: 'alice@gmail.com', subject: 'Volunteer Inquiry', time: '2 hours ago', status: 'unread' },
  { name: 'Jean Pierre', email: 'jp@yahoo.com', subject: 'Partnership Proposal', time: '5 hours ago', status: 'read' },
  { name: 'Marie Claire', email: 'marie@gmail.com', subject: 'Donation Question', time: '1 day ago', status: 'read' },
  { name: 'David Nkusi', email: 'david@gmail.com', subject: 'Program Information', time: '2 days ago', status: 'unread' },
];

const recentPosts = [
  { title: 'How Education is Transforming Communities', category: 'Education', date: 'Nov 12, 2024' },
  { title: 'Community Health Initiative Reaches 10,000 Families', category: 'Healthcare', date: 'Oct 5, 2024' },
  { title: 'Youth Entrepreneurship Program Launches New Cohort', category: 'Skills', date: 'Sep 18, 2024' },
];

const Overview: React.FC = () => {
  return (
    <div className="space-y-6">

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
              {stat.icon}
            </div>
            <div className="min-w-0">
              <p className="text-2xl font-extrabold text-gray-800">{stat.value.toLocaleString()}</p>
              <p className="text-xs text-gray-500 truncate">{stat.label}</p>
              <p className="text-xs text-green-600 font-medium mt-0.5">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Messages */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaEnvelope className="w-4 h-4 text-primary" /> Recent Messages
          </h3>
          <div className="space-y-3">
            {recentMessages.map((msg, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {msg.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-gray-800 truncate">{msg.name}</p>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{msg.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{msg.subject}</p>
                </div>
                {msg.status === 'unread' && (
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaBookOpen className="w-4 h-4 text-primary" /> Recent Blog Posts
          </h3>
          <div className="space-y-3">
            {recentPosts.map((post, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaBookOpen className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 line-clamp-1">{post.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
