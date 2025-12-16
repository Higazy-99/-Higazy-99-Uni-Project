import React from 'react';

const Exams = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">السجلات والامتحانات</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">السجلات الحالية وأماكن الامتحانات</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">متابعة المواد الدراسية وجداول الاختبارات للفصل الحالي.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-accent">school</span>
          <div>
            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">الفصل الدراسي</p>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">الثاني 2024-2025</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined">library_books</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">المقررات المسجلة</h3>
              <p className="text-xs text-slate-500">عدد الساعات المسجلة: 11 ساعة</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-bold rounded-full border border-green-100 dark:border-green-800 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            تسجيل نشط
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 rounded-tr-lg" scope="col">كود المقرر</th>
                <th className="px-6 py-4" scope="col">اسم المقرر</th>
                <th className="px-6 py-4 text-center" scope="col">الساعات</th>
                <th className="px-6 py-4" scope="col">المحاضر</th>
                <th className="px-6 py-4 text-center rounded-tl-lg" scope="col">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">SE301</td>
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">هندسة المتطلبات المتقدمة</td>
                <td className="px-6 py-4 text-center">3</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px]">د</div>
                  <span>د. أحمد محمود</span>
                </td>
                <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">مسجل</span></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">SE304</td>
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">إدارة مشاريع البرمجيات</td>
                <td className="px-6 py-4 text-center">3</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px]">م</div>
                  <span>أ.د. منى الشريف</span>
                </td>
                <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">مسجل</span></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">CS310</td>
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">الذكاء الاصطناعي وتعلم الآلة</td>
                <td className="px-6 py-4 text-center">3</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px]">ك</div>
                  <span>د. كريم عادل</span>
                </td>
                <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">مسجل</span></td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">SE400</td>
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">مشروع التخرج (1)</td>
                <td className="px-6 py-4 text-center">2</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px]">ل</div>
                  <span>لجنة المشاريع</span>
                </td>
                <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-100 dark:border-purple-800">جاري</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-amber-50/40 dark:bg-amber-900/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-500">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">جدول الامتحانات النهائية</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">يرجى الالتزام بموعد الحضور (قبل 15 دقيقة)</p>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            تحميل الجدول PDF
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4" scope="col">المقرر</th>
                <th className="px-6 py-4" scope="col">التاريخ</th>
                <th className="px-6 py-4" scope="col">الوقت</th>
                <th className="px-6 py-4" scope="col">القاعة / اللجنة</th>
                <th className="px-6 py-4 text-center" scope="col">رقم الجلوس</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="bg-white dark:bg-slate-900 hover:bg-amber-50/20 dark:hover:bg-amber-900/10 transition-colors border-r-4 border-r-transparent hover:border-r-amber-400 group">
                <td className="px-6 py-4">
                  <div className="font-bold text-slate-900 dark:text-white">هندسة المتطلبات المتقدمة</div>
                  <div className="text-xs text-slate-400 mt-1">SE301</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-medium">
                    <span className="material-symbols-outlined text-slate-400 text-lg">event</span>
                    <span>15 مايو 2025</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    09:00 ص - 12:00 م
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span>مبنى C - قاعة 101</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded font-mono font-bold text-lg shadow-sm border border-slate-200 dark:border-slate-700">4520</span>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900 hover:bg-amber-50/20 dark:hover:bg-amber-900/10 transition-colors border-r-4 border-r-transparent hover:border-r-amber-400 group">
                <td className="px-6 py-4">
                  <div className="font-bold text-slate-900 dark:text-white">إدارة مشاريع البرمجيات</div>
                  <div className="text-xs text-slate-400 mt-1">SE304</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-medium">
                    <span className="material-symbols-outlined text-slate-400 text-lg">event</span>
                    <span>18 مايو 2025</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    09:00 ص - 12:00 م
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span>مبنى C - قاعة 205</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded font-mono font-bold text-lg shadow-sm border border-slate-200 dark:border-slate-700">4520</span>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900 hover:bg-amber-50/20 dark:hover:bg-amber-900/10 transition-colors border-r-4 border-r-transparent hover:border-r-amber-400 group">
                <td className="px-6 py-4">
                  <div className="font-bold text-slate-900 dark:text-white">الذكاء الاصطناعي</div>
                  <div className="text-xs text-slate-400 mt-1">CS310</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-medium">
                    <span className="material-symbols-outlined text-slate-400 text-lg">event</span>
                    <span>22 مايو 2025</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    01:00 م - 04:00 م
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                    <span>معامل الحاسب - معمل 5</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded font-mono font-bold text-lg shadow-sm border border-slate-200 dark:border-slate-700">4520</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button className="bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
          <span className="material-symbols-outlined">print</span>
          طباعة بطاقة الامتحان
        </button>
      </div>
    </div>
  );
};

export default Exams;