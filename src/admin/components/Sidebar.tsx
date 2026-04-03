import React from 'react';
import logo from '../../assets/logo.png';
import { MdDashboard, MdMessage, MdPeople, MdPhoto } from 'react-icons/md';
import { FaBookOpen, FaUsers, FaEnvelopeOpen, FaSignOutAlt } from 'react-icons/fa';

const navItems = [
  { id: 'overview', label: 'Overview', icon: <MdDashboard className="w-5 h-5" /> },
  { id: 'messages', label: 'Messages', icon: <MdMessage className="w-5 h-5" /> },
  { id: 'blog', label: 'Blog Posts', icon: <FaBookOpen className="w-5 h-5" /> },
  { id: 'team', label: 'Team', icon: <MdPeople className="w-5 h-5" /> },
  { id: 'gallery', label: 'Gallery', icon: <MdPhoto className="w-5 h-5" /> },
  { id: 'newsletter', label: 'Newsletter', icon: <FaEnvelopeOpen className="w-5 h-5" /> },
  { id: 'volunteers', label: 'Volunteers', icon: <FaUsers className="w-5 h-5" /> },
];

interface Props {
  active: string;
  onNavigate: (id: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ active, onNavigate, onLogout, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={onClose} />
      )}

      <aside className={`fixed top-0 left-0 h-full w-64 bg-primary text-white z-30 flex flex-col transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <img src={logo} alt="Ineza" className="h-10 w-auto" />
          <div>
            <p className="font-bold text-sm leading-tight">INEZA</p>
            <p className="text-xs text-green-200">Admin Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); onClose(); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${active === item.id ? 'bg-white/20 text-white' : 'text-green-100 hover:bg-white/10 hover:text-white'}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-all duration-200"
          >
            <FaSignOutAlt className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
