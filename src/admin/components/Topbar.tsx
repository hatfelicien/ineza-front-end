import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';

interface Props {
  page: string;
  onMenuClick: () => void;
}

const pageLabels: Record<string, string> = {
  overview: 'Overview',
  messages: 'Messages',
  blog: 'Blog Posts',
  team: 'Team Members',
  gallery: 'Gallery',
  newsletter: 'Newsletter Subscribers',
  volunteers: 'Volunteers',
};

const Topbar: React.FC<Props> = ({ page, onMenuClick }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden text-gray-500 hover:text-primary transition">
          <FaBars className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">{pageLabels[page] || page}</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 text-gray-500 hover:text-primary transition">
          <MdNotifications className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
          A
        </div>
      </div>
    </header>
  );
};

export default Topbar;
