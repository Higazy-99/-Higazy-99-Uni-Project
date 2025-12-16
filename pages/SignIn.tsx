import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const SignIn = () => {
  const { login } = useData();
  const [id, setId] = useState('202503410');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay for effect
    setTimeout(() => {
      const success = login(id, password);
      if (!success) {
        setError('بيانات الدخول غير صحيحة. يرجى التأكد من الرقم الجامعي وكلمة المرور.');
        setIsLoading(false);
      }
      // If success, the App component will handle the redirection based on context state
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row rtl:flex-row-reverse border border-slate-100 dark:border-slate-700 min-h-[600px]">
        
        {/* Left Side: Image (Desktop only) */}
        <div className="hidden md:block w-1/2 relative bg-primary">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="University Campus" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full p-12 text-white text-right">
            <h2 className="text-3xl font-extrabold mb-2">النظام الأكاديمي الموحد</h2>
            <p className="text-blue-100 text-lg">بوابتك لمستقبل تعليمي متميز في جامعة القاهرة.</p>
            <div className="mt-8 flex gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <span className="material-symbols-outlined text-3xl mb-2">school</span>
                <p className="text-xs font-bold">خدمات طلابية</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <span className="material-symbols-outlined text-3xl mb-2">schedule</span>
                <p className="text-xs font-bold">جداول دراسية</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <span className="material-symbols-outlined text-3xl mb-2">forum</span>
                <p className="text-xs font-bold">تواصل فعال</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">جامعة القاهرة</h1>
              <p className="text-xs text-slate-500 font-medium">كلية الدراسات العليا للبحوث الاحصائية</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">تسجيل الدخول</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">مرحباً بعودتك! يرجى إدخال بياناتك للمتابعة.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">الرقم الجامعي</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 pl-10 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-mono text-left dir-ltr"
                  placeholder="2025xxxxx"
                  required
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">badge</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">كلمة المرور</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">نسيت كلمة المرور؟</a>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 pl-10 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none dir-ltr text-left"
                  placeholder="••••••••"
                  required
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">error</span>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  <span>دخول</span>
                  <span className="material-symbols-outlined rtl:rotate-180">login</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
            <p className="text-xs text-slate-400">
              تواجه مشكلة في الدخول؟ <a href="#" className="text-primary font-bold hover:underline">تواصل مع الدعم الفني</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;