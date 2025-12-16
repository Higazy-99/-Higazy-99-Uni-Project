import React from 'react';
import { useData } from '../context/DataContext';

const Schedule = () => {
  const { registeredCourses } = useData();

  // Helper to find courses for a specific day
  const getCoursesForDay = (day: string) => {
    return registeredCourses.filter(course => course.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

  // Find next lecture (just a simple mock logic finding the first one for demo)
  const nextLecture = registeredCourses[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">الجدول الدراسي</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">الجدول الدراسي الأسبوعي</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">عرض تفصيلي للمحاضرات وأوقاتها ومواقع القاعات.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">print</span>
            <span className="hidden sm:inline">طباعة</span>
          </button>
          <button className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">download</span>
            <span className="hidden sm:inline">تنزيل الجدول</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-lg p-6 text-white relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTAgMzhoNDB2MmgtNDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-4">
            {nextLecture ? (
              <div>
                <div className="flex items-center gap-2 text-blue-100 mb-2">
                  <span className="px-2 py-0.5 rounded bg-white/20 text-xs font-bold backdrop-blur-sm">المحاضرة القادمة</span>
                  <span className="text-sm font-medium">{nextLecture.day}, {nextLecture.startTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">{nextLecture.name}</h2>
                <div className="flex flex-wrap items-center gap-4 text-blue-50 text-sm mt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    <span>{nextLecture.room}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">person</span>
                    <span>{nextLecture.lecturer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">code</span>
                    <span>{nextLecture.code}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-1">لا توجد محاضرات قادمة</h2>
                <p className="text-blue-100">استمتع بوقتك!</p>
              </div>
            )}
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-center min-w-[100px]">
              <span className="block text-xs text-blue-100 mb-1">الوضع</span>
              <span className="block text-xl font-bold font-mono tracking-wider">{registeredCourses.length > 0 ? 'نشط' : 'فارغ'}</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-card border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 dark:text-slate-200">معلومات الفصل</h3>
            <span className="material-symbols-outlined text-slate-400">info</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">الفصل الدراسي</span>
              <span className="font-semibold text-slate-900 dark:text-white">الثاني 2024-2025</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">الأسبوع الحالي</span>
              <span className="font-semibold text-slate-900 dark:text-white">الأسبوع الثامن</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">حالة التسجيل</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">نشط</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-1">تم إنجاز 60% من الفصل الدراسي</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary dark:text-primary-light">calendar_view_week</span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">الجدول الأسبوعي</h3>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> محاضرة (إجباري)
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> محاضرة (اختياري)
            </span>
          </div>
        </div>
        <div className="p-6 overflow-x-auto">
          <div className="min-w-[800px] grid grid-cols-5 gap-4">
            {days.map((day, index) => {
              const dayCourses = getCoursesForDay(day);
              return (
                <div key={index} className="flex flex-col gap-3">
                  <div className="text-center pb-2 border-b-2 border-slate-200 dark:border-slate-700 mb-2">
                    <span className="block font-bold text-slate-800 dark:text-slate-200">{day}</span>
                  </div>
                  {dayCourses.length > 0 ? (
                    dayCourses.map(course => (
                      <div key={course.code} className={`p-3 border-r-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group ${course.type === 'compulsory' ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500' : 'bg-purple-50 dark:bg-purple-900/10 border-purple-500'}`}>
                        <div className="flex justify-between items-start mb-1">
                          <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${course.type === 'compulsory' ? 'text-blue-700 dark:text-blue-300 bg-white dark:bg-blue-900/50' : 'text-purple-700 dark:text-purple-300 bg-white dark:bg-purple-900/50'}`}>
                            {course.code}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight mb-2">{course.name}</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-[14px]">schedule</span>
                            <span>{course.startTime} - {course.endTime}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-[14px]">room</span>
                            <span>{course.room}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="h-full flex items-center justify-center p-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-lg">
                      <span className="text-xs text-slate-400">لا يوجد</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;