import React, { useState } from 'react';
import { FaEnvelope, FaTrash, FaReply } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';

const initialMessages = [
  { id: 1, name: 'Alice Mutoni', email: 'alice@gmail.com', subject: 'Volunteer Inquiry', message: 'Hello, I would like to volunteer with your organization. I have experience in teaching and would love to contribute to your education programs. Please let me know how I can get involved.', time: '2 hours ago', status: 'unread' },
  { id: 2, name: 'Jean Pierre', email: 'jp@yahoo.com', subject: 'Partnership Proposal', message: 'We are a local NGO working in healthcare and would like to explore a partnership with Ineza Foundation. Could we schedule a meeting to discuss potential collaboration?', time: '5 hours ago', status: 'read' },
  { id: 3, name: 'Marie Claire', email: 'marie@gmail.com', subject: 'Donation Question', message: 'I would like to make a donation but have some questions about how the funds are used. Can you provide more details about your financial transparency reports?', time: '1 day ago', status: 'read' },
  { id: 4, name: 'David Nkusi', email: 'david@gmail.com', subject: 'Program Information', message: 'I am interested in enrolling my child in your education support program. What are the eligibility criteria and how can I apply?', time: '2 days ago', status: 'unread' },
  { id: 5, name: 'Grace Uwase', email: 'grace@gmail.com', subject: 'Media Coverage', message: 'I am a journalist working on a story about NGOs in Rwanda. I would love to interview someone from your team about the impact of your work.', time: '3 days ago', status: 'read' },
];

const Messages: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [selected, setSelected] = useState<typeof initialMessages[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const filtered = messages.filter(m => filter === 'all' ? true : m.status === filter);

  const markRead = (id: number) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status: 'read' } : m));
  };

  const deleteMsg = (id: number) => {
    setMessages(prev => prev.filter(m => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Filter bar */}
      <div className="flex items-center gap-2 p-4 border-b border-gray-100">
        {(['all', 'unread', 'read'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f === 'unread' && (
              <span className="ml-1.5 bg-white text-primary text-xs rounded-full px-1.5">
                {messages.filter(m => m.status === 'unread').length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {/* List */}
        <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto">
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12 text-sm">No messages found.</p>
          )}
          {filtered.map(msg => (
            <div key={msg.id}
              onClick={() => { setSelected(msg); markRead(msg.id); }}
              className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50 transition ${selected?.id === msg.id ? 'bg-primary/5 border-l-4 border-primary' : ''}`}>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                {msg.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <p className={`text-sm truncate ${msg.status === 'unread' ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>{msg.name}</p>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{msg.time}</span>
                </div>
                <p className="text-xs text-gray-600 truncate">{msg.subject}</p>
                <p className="text-xs text-gray-400 truncate">{msg.message}</p>
              </div>
              {msg.status === 'unread' && <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />}
            </div>
          ))}
        </div>

        {/* Detail */}
        <div className="p-6 min-h-[300px]">
          {!selected ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 py-16">
              <FaEnvelope className="w-12 h-12 mb-3 opacity-30" />
              <p className="text-sm">Select a message to read</p>
            </div>
          ) : (
            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{selected.subject}</h3>
                  <p className="text-sm text-gray-500">{selected.name} · {selected.email}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{selected.time}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => markRead(selected.id)} title="Mark as read"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                    <MdMarkEmailRead className="w-4 h-4" />
                  </button>
                  <button onClick={() => deleteMsg(selected.id)} title="Delete"
                    className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition">
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">{selected.message}</p>
              <a href={`mailto:${selected.email}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent transition">
                <FaReply className="w-4 h-4" /> Reply via Email
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
