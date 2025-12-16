import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between px-6 py-3 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 -mr-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-2xl font-extrabold text-primary dark:text-white tracking-tight leading-tight">جامعة القاهرة</h1>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">كلية الدراسات العليا للبحوث الاحصائية</span>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <div className="relative hidden md:block group">
          <input 
            className="w-64 bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-xl pr-10 pl-4 py-2.5 text-sm transition-all shadow-inner" 
            placeholder="بحث سريع..." 
            type="text"
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">search</span>
        </div>
        <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 relative text-slate-600 dark:text-slate-300 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></span>
        </button>
        <button className="hidden sm:flex p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
    </header>
  );
};

export default Header;