import React, { useState } from 'react';
import { FaTrash, FaDownload } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';

const initialSubs = [
  { id: 1, name: 'Alice Mutoni', email: 'alice@gmail.com', topics: ['Education', 'Healthcare'], date: 'Nov 10, 2024' },
  { id: 2, name: 'Jean Pierre', email: 'jp@yahoo.com', topics: ['Skills'], date: 'Nov 8, 2024' },
  { id: 3, name: 'Marie Claire', email: 'marie@gmail.com', topics: ['Education', 'Community'], date: 'Oct 25, 2024' },
  { id: 4, name: 'David Nkusi', email: 'david@gmail.com', topics: ['Healthcare', 'Skills'], date: 'Oct 20, 2024' },
  { id: 5, name: 'Grace Uwase', email: 'grace@gmail.com', topics: ['Education'], date: 'Oct 15, 2024' },
  { id: 6, name: 'Patrick Habimana', email: 'patrick@gmail.com', topics: ['Community', 'Skills'], date: 'Oct 10, 2024' },
  { id: 7, name: 'Diane Ingabire', email: 'diane@gmail.com', topics: ['Education', 'Healthcare', 'Skills'], date: 'Sep 30, 2024' },
  { id: 8, name: 'Eric Mugisha', email: 'eric@gmail.com', topics: ['Community'], date: 'Sep 20, 2024' },
];

const Newsletter: React.FC = () => {
  const [subs, setSubs] = useState(initialSubs);
  const [search, setSearch] = useState('');

  const filtered = subs.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search subscribers..."
            className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition" />
        </div>
        <button className="flex items-center gap-2 bg-accent text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary transition">
          <FaDownload className="w-3.5 h-3.5" /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{filtered.length} subscribers</p>
        </div>
        <table className="w-full text-sm">
          <thead className="border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500">Name</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 hidden sm:table-cell">Email</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 hidden md:table-cell">Topics</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 hidden lg:table-cell">Joined</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(sub => (
              <tr key={sub.id} className="hover:bg-gray-50 transition">
                <td className="px-5 py-3.5 font-medium text-gray-800">{sub.name}</td>
                <td className="px-5 py-3.5 text-gray-500 hidden sm:table-cell">{sub.email}</td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {sub.topics.map(t => (
                      <span key={t} className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-3.5 text-gray-400 text-xs hidden lg:table-cell">{sub.date}</td>
                <td className="px-5 py-3.5">
                  <button onClick={() => setSubs(prev => prev.filter(s => s.id !== sub.id))}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition">
                    <FaTrash className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Newsletter;
