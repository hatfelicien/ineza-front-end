import React, { useState } from 'react';
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';

const initialVolunteers = [
  { id: 1, name: 'Alice Mutoni', email: 'alice@gmail.com', skill: 'Teaching', status: 'active', joined: 'Jan 2024' },
  { id: 2, name: 'Jean Pierre', email: 'jp@yahoo.com', skill: 'Healthcare', status: 'pending', joined: 'Nov 2024' },
  { id: 3, name: 'Marie Claire', email: 'marie@gmail.com', skill: 'IT & Tech', status: 'active', joined: 'Mar 2024' },
  { id: 4, name: 'David Nkusi', email: 'david@gmail.com', skill: 'Construction', status: 'active', joined: 'Jun 2024' },
  { id: 5, name: 'Grace Uwase', email: 'grace@gmail.com', skill: 'Counseling', status: 'pending', joined: 'Nov 2024' },
  { id: 6, name: 'Patrick Habimana', email: 'patrick@gmail.com', skill: 'Finance', status: 'inactive', joined: 'Feb 2024' },
];

const Volunteers: React.FC = () => {
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'pending' | 'inactive'>('all');

  const filtered = volunteers.filter(v => {
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase()) || v.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || v.status === filter;
    return matchSearch && matchFilter;
  });

  const approve = (id: number) => setVolunteers(prev => prev.map(v => v.id === id ? { ...v, status: 'active' } : v));
  const reject = (id: number) => setVolunteers(prev => prev.map(v => v.id === id ? { ...v, status: 'inactive' } : v));
  const remove = (id: number) => setVolunteers(prev => prev.filter(v => v.id !== id));

  const statusColor: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    inactive: 'bg-gray-100 text-gray-500',
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search volunteers..."
            className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition" />
        </div>
        <div className="flex gap-2">
          {(['all', 'active', 'pending', 'inactive'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition capitalize ${filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500">Name</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 hidden sm:table-cell">Skill</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 hidden md:table-cell">Joined</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(v => (
              <tr key={v.id} className="hover:bg-gray-50 transition">
                <td className="px-5 py-3.5">
                  <p className="font-medium text-gray-800">{v.name}</p>
                  <p className="text-xs text-gray-400">{v.email}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-500 hidden sm:table-cell">{v.skill}</td>
                <td className="px-5 py-3.5 text-gray-400 text-xs hidden md:table-cell">{v.joined}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[v.status]}`}>{v.status}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1 justify-end">
                    {v.status === 'pending' && (
                      <>
                        <button onClick={() => approve(v.id)} title="Approve"
                          className="p-1.5 text-gray-400 hover:text-green-600 transition">
                          <FaCheck className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => reject(v.id)} title="Reject"
                          className="p-1.5 text-gray-400 hover:text-orange transition">
                          <FaTimes className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                    <button onClick={() => remove(v.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition">
                      <FaTrash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Volunteers;
