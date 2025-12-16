import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';

// Pages
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import Transcript from './pages/Transcript';
import Exams from './pages/Exams';
import Finance from './pages/Finance';
import Documents from './pages/Documents';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar isOpen={sidebarOpen} close={() => setSidebarOpen(false)} />
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-[#0f172a] p-4 lg:p-8 scroll-smooth">
           <div className="max-w-7xl mx-auto">
             {children}
             <div className="h-12"></div>
           </div>
        </main>
        <Chatbot />
      </div>
    </div>
  );
};

// Main Content Component to handle auth checking
const MainContent = () => {
  const { isAuthenticated } = useData();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <DataProvider>
      <HashRouter>
        <MainContent />
      </HashRouter>
    </DataProvider>
  );
};

export default App;