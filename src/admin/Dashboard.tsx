import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Overview from './pages/Overview';
import Messages from './pages/Messages';
import BlogAdmin from './pages/BlogAdmin';
import TeamAdmin from './pages/TeamAdmin';
import GalleryAdmin from './pages/GalleryAdmin';
import NewsletterAdmin from './pages/NewsletterAdmin';
import Volunteers from './pages/Volunteers';

interface Props {
  onLogout: () => void;
}

const Dashboard: React.FC<Props> = ({ onLogout }) => {
  const [activePage, setActivePage] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'overview': return <Overview />;
      case 'messages': return <Messages />;
      case 'blog': return <BlogAdmin />;
      case 'team': return <TeamAdmin />;
      case 'gallery': return <GalleryAdmin />;
      case 'newsletter': return <NewsletterAdmin />;
      case 'volunteers': return <Volunteers />;
      default: return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        active={activePage}
        onNavigate={setActivePage}
        onLogout={onLogout}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <Topbar page={activePage} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
