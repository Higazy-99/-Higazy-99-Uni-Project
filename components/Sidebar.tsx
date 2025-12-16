import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, close }) => {
  const location = useLocation();
  const { user, logout } = useData();

  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ path, icon, label }: { path: string; icon: string; label: string }) => {
    const active = isActive(path);
    return (
      <Link
        to={path}
        onClick={close}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
          active 
            ? 'bg-primary text-white shadow-md shadow-primary/30 font-bold' 
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary-light'
        }`}
      >
        <span className={`material-symbols-outlined text-[22px] ${!active ? 'group-hover:scale-110 transition-transform' : ''}`}>
          {icon}
        </span>
        {label}
      </Link>
    );
  };

  return (
    <aside 
      className={`
        w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 
        flex flex-col shadow-lg z-20 flex-shrink-0 transition-transform duration-300 
        fixed lg:relative h-full lg:translate-x-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}
      style={{ right: 0 }} 
      id="sidebar"
    >
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col items-center text-center bg-slate-50/50 dark:bg-slate-800/20">
        <div className="relative mb-3 group cursor-pointer">
          <div className="w-24 h-24 rounded-full p-1 bg-white dark:bg-slate-800 border-2 border-primary/20 dark:border-primary/50 shadow-sm">
            <img 
              alt="Student Photo" 
              className="h-full w-full rounded-full object-cover" 
              src={user.image}
            />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full" title="Online"></div>
        </div>
        <h2 className="font-bold text-lg text-slate-900 dark:text-slate-50">{user.nameAr}</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">ID: {user.id}</p>
        <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {user.major}
        </span>
        <div className="mt-4 w-full grid grid-cols-2 gap-2">
          <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700 text-center shadow-sm">
            <p className="text-[10px] text-slate-500 dark:text-slate-400">المعدل التراكمي</p>
            <p className="text-primary dark:text-accent font-bold text-lg">{user.gpa}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700 text-center shadow-sm">
            <p className="text-[10px] text-slate-500 dark:text-slate-400">الساعات المكتسبة</p>
            <p className="text-slate-700 dark:text-slate-300 font-bold text-lg">{user.earnedHours}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto sidebar-scroll">
        <NavItem path="/" icon="dashboard" label="لوحة المعلومات" />
        <NavItem path="/profile" icon="person" label="الملف الشخصي" />
        <NavItem path="/registration" icon="how_to_reg" label="تسجيل المقررات" />
        <NavItem path="/schedule" icon="calendar_month" label="الجدول الدراسي" />
        <NavItem path="/exams" icon="event_note" label="السجلات والامتحانات" />
        <NavItem path="/transcript" icon="school" label="النتائج السابقة" />
        <NavItem path="/finance" icon="payments" label="الرسوم الدراسية" />
        <NavItem path="/services" icon="support_agent" label="الخدمات الطلابية" />
        <NavItem path="/documents" icon="description" label="المستندات والشهادات" />
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
        <button 
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">logout</span>
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;