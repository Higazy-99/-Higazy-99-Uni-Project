import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Dashboard = () => {
  const { user, registeredCourses, requests } = useData();
  const firstName = user.nameAr.split(' ')[0];
  const registeredHours = registeredCourses.reduce((sum, c) => sum + c.hours, 0);
  const pendingRequests = requests.filter(r => r.status === 'pending').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">لوحة المعلومات</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">مرحباً، {firstName} 👋</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm md:text-base">نتمنى لك فصلاً دراسياً موفقاً، إليك ملخص لأهم المستجدات الأكاديمية.</p>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 px-4 py-3 rounded-xl flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs text-slate-500 dark:text-slate-400">التخصص الدراسي</span>
            <span className="font-bold text-primary dark:text-white text-sm">{user.major}</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-accent">workspace_premium</span>
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">الفصل الدراسي</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">الثاني 2024-2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-primary">school</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">المعدل التراكمي</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{user.gpa}</h3>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-300">
              <span className="material-symbols-outlined text-xl">school</span>
            </div>
          </div>
          <div className="flex items-center text-xs">
            <span className="text-green-600 dark:text-green-400 flex items-center font-medium bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
              ممتاز
            </span>
            <span className="text-slate-400 mr-2">مرتبة الشرف</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-green-600">hourglass_bottom</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">الساعات المكتسبة</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{user.earnedHours} <span className="text-sm font-normal text-slate-400">/ 132</span></h3>
            </div>
            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <span className="material-symbols-outlined text-xl">hourglass_bottom</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-2">
            <div className="bg-green-500 h-1.5 rounded-full" style={{width: `${(user.earnedHours/132)*100}%`}}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-purple-600">library_books</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">المواد المسجلة</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{registeredCourses.length} <span className="text-sm font-normal text-slate-400">مواد</span></h3>
            </div>
            <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
              <span className="material-symbols-outlined text-xl">library_books</span>
            </div>
          </div>
          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono font-bold text-slate-700 dark:text-slate-300 ml-1">{registeredHours}</span>
            ساعة معتمدة لهذا الفصل
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-amber-600">assignment</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">الطلبات النشطة</p>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-1 line-clamp-1">{pendingRequests} طلبات</h3>
            </div>
            <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
              <span className="material-symbols-outlined text-xl">assignment</span>
            </div>
          </div>
          <div className="flex items-center text-xs">
            <span className="text-amber-700 dark:text-amber-400 flex items-center font-medium bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded">
              <span className="material-symbols-outlined text-sm mr-1">timer</span>
              قيد المراجعة
            </span>
          </div>
        </div>
      </div>
      
      {/* Rest of the dashboard content (Schedule preview etc) would be here, can also be dynamic but keeping static for brevity unless requested to change */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary dark:text-primary-light">calendar_today</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">جدول اليوم (الأحد)</h3>
              </div>
              <span className="text-xs font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400">
                15 أكتوبر
              </span>
            </div>
            <div className="p-4 space-y-3">
              {/* Dynamic Schedule Preview based on registered courses matching today (Sunday for demo) */}
              {registeredCourses.filter(c => c.day === 'الأحد').length > 0 ? (
                registeredCourses.filter(c => c.day === 'الأحد').map(c => (
                  <div key={c.code} className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 relative overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                    <div className="flex flex-col items-center justify-center min-w-[4rem] text-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">من</span>
                      <span className="font-bold text-slate-900 dark:text-white">{c.startTime}</span>
                      <div className="h-3 w-px bg-slate-300 dark:bg-slate-700 my-1"></div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">إلى</span>
                      <span className="font-bold text-slate-900 dark:text-white">{c.endTime}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">{c.name}</h4>
                        <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                          {c.code}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-lg">location_on</span>
                          <span>{c.room}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-lg">person</span>
                          <span>{c.lecturer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">لا توجد محاضرات مسجلة لهذا اليوم</div>
              )}
            </div>
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
              <Link to="/schedule" className="text-sm text-primary font-medium hover:underline flex items-center justify-center gap-1">
                عرض الجدول الأسبوعي الكامل
                <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 px-1">خدمات سريعة</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link to="/transcript" className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">description</span>
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">السجل الأكاديمي</span>
            </Link>
            <Link to="/finance" className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">دفع الرسوم</span>
            </Link>
            <Link to="/exams" className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">print</span>
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">بطاقة الامتحان</span>
            </Link>
            <Link to="/services" className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">طلب مساعدة</span>
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-500">notifications_active</span>
                تنبيهات هامة
              </h3>
              <button className="text-xs text-primary hover:underline">الكل</button>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">تذكير: سداد الرسوم الدراسية</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">يرجى العلم أن آخر موعد لسداد القسط الثاني هو الخميس القادم الموافق 20 أكتوبر.</p>
                    <span className="text-[10px] text-slate-400 mt-2 block">منذ ساعتين</span>
                  </div>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">تم رصد درجة الواجب الأول</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">لمقرر الذكاء الاصطناعي (CS310). يمكنك مراجعة الدرجة الآن.</p>
                    <span className="text-[10px] text-slate-400 mt-2 block">أمس</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg p-5 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <span className="material-symbols-outlined text-9xl -mr-4 -mt-4">support_agent</span>
            </div>
            <h3 className="font-bold text-lg relative z-10">المرشد الأكاديمي</h3>
            <div className="flex items-center gap-3 mt-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                د
              </div>
              <div>
                <p className="font-bold">د. خالد العمراني</p>
                <p className="text-xs text-blue-100">ساعات مكتبية: أحد - خميس (10-12)</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 relative z-10">
              <button className="flex-1 bg-white text-primary text-xs font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors">حجز موعد</button>
              <button className="flex-1 bg-primary-light/50 text-white text-xs font-bold py-2 rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">mail</span>
                مراسلة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;