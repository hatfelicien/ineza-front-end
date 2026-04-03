import React, { useState, useRef } from 'react';
import { FaTrash, FaEdit, FaPlus, FaTimes, FaCamera } from 'react-icons/fa';

interface Member {
  id: number;
  name: string;
  role: string;
  email: string;
  department: string;
  image?: string;
}

const initialTeam: Member[] = [
  { id: 1, name: 'Dr. Amina Uwimana', role: 'Executive Director', email: 'amina@ineza.org', department: 'Leadership' },
  { id: 2, name: 'Jean Claude Habimana', role: 'Programs Manager', email: 'jc@ineza.org', department: 'Programs' },
  { id: 3, name: 'Marie Ange Mukamana', role: 'Education Coordinator', email: 'marie@ineza.org', department: 'Education' },
  { id: 4, name: 'Patrick Nzeyimana', role: 'Healthcare Lead', email: 'patrick@ineza.org', department: 'Healthcare' },
  { id: 5, name: 'Diane Ingabire', role: 'Communications Officer', email: 'diane@ineza.org', department: 'Communications' },
  { id: 6, name: 'Eric Mugisha', role: 'Finance Manager', email: 'eric@ineza.org', department: 'Finance' },
];

const departments = ['Leadership', 'Programs', 'Education', 'Healthcare', 'Communications', 'Finance'];

const TeamAdmin: React.FC = () => {
  const [team, setTeam] = useState<Member[]>(initialTeam);
  const [showForm, setShowForm] = useState(false);
  const [editMember, setEditMember] = useState<Member | null>(null);
  const [form, setForm] = useState({ name: '', role: '', email: '', department: 'Leadership', image: '' });
  const imageInputRef = useRef<HTMLInputElement>(null);

  const openAdd = () => {
    setForm({ name: '', role: '', email: '', department: 'Leadership', image: '' });
    setEditMember(null);
    setShowForm(true);
  };

  const openEdit = (m: Member) => {
    setForm({ name: m.name, role: m.role, email: m.email, department: m.department, image: m.image || '' });
    setEditMember(m);
    setShowForm(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setForm(prev => ({ ...prev, image: ev.target?.result as string }));
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editMember) {
      setTeam(prev => prev.map(m => m.id === editMember.id ? { ...m, ...form } : m));
    } else {
      setTeam(prev => [...prev, { id: Date.now(), ...form }]);
    }
    setShowForm(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{team.length} members</p>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent transition">
          <FaPlus className="w-3.5 h-3.5" /> Add Member
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map(member => (
          <div key={member.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-start justify-between mb-3">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
              ) : (
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
              )}
              <div className="flex gap-1">
                <button onClick={() => openEdit(member)} className="p-1.5 text-gray-400 hover:text-primary transition">
                  <FaEdit className="w-4 h-4" />
                </button>
                <button onClick={() => setTeam(prev => prev.filter(m => m.id !== member.id))} className="p-1.5 text-gray-400 hover:text-red-500 transition">
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h4 className="font-bold text-gray-800 text-sm">{member.name}</h4>
            <p className="text-xs text-primary font-medium mt-0.5">{member.role}</p>
            <p className="text-xs text-gray-400 mt-1 truncate">{member.email}</p>
            <span className="inline-block mt-2 bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{member.department}</span>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-800 text-lg">{editMember ? 'Edit Member' : 'Add Member'}</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition">
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Image upload */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {form.image ? (
                    <img src={form.image} alt="Member" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20" />
                  ) : (
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
                      <FaCamera className="w-8 h-8" />
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-accent transition shadow-md">
                    <FaCamera className="w-3.5 h-3.5" />
                    <input ref={imageInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                </div>
                <p className="text-xs text-gray-400 mt-2">Click camera to upload photo</p>
                {form.image && (
                  <button onClick={() => setForm(prev => ({ ...prev, image: '' }))}
                    className="text-xs text-red-400 hover:text-red-600 mt-1 transition">
                    Remove photo
                  </button>
                )}
              </div>

              {(['name', 'role', 'email'] as const).map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field}</label>
                  <input value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select value={form.department} onChange={e => setForm({ ...form, department: e.target.value })}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                  {departments.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>

              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowForm(false)}
                  className="flex-1 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
                  Cancel
                </button>
                <button onClick={handleSave}
                  className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-accent transition">
                  {editMember ? 'Save Changes' : 'Add Member'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamAdmin;
