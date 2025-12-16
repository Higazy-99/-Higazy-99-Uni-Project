import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const Services = () => {
  const { requests, addRequest } = useData();
  
  // Filter for service requests only
  const serviceRequests = requests.filter(req => req.category === 'service');

  const handleRequest = (serviceName: string) => {
    addRequest({
      category: 'service',
      title: serviceName
    });
    alert(`تم تقديم ${serviceName} بنجاح!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">الخدمات الطلابية</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">بوابة الخدمات الطلابية</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">تصفح وقدم طلبات للخدمات الأكاديمية والإدارية المتاحة.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-500">assignment_turned_in</span>
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">طلبات قيد المعالجة</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{serviceRequests.filter(r => r.status === 'pending').length} طلب نشط</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-accent">school</span>
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">الفصل الدراسي</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">الثاني 2024-2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined">auto_stories</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">الخدمات الأكاديمية</h3>
              <p className="text-xs text-slate-500">الخدمات المتعلقة بالسجلات، القبول، والتسجيل</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button onClick={() => handleRequest('طلب إفادة قيد')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800">
                  فوري
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">طلب إفادة قيد</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">الحصول على وثيقة رسمية تثبت قيدك في الجامعة للفصل الحالي، موجهة للجهات الرسمية.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-primary dark:text-blue-400 group-hover:underline">
                تقديم الطلب
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
            <button onClick={() => handleRequest('كشف درجات (غير رسمي)')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">grade</span>
                </div>
                <span className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-600">
                  24 ساعة
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">كشف درجات (غير رسمي)</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">استعراض وتحميل نسخة إلكترونية من السجل الأكاديمي لجميع الفصول الدراسية.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-primary dark:text-blue-400 group-hover:underline">
                عرض السجل
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
            <button onClick={() => handleRequest('مراجعة نتيجة مقرر')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">history_edu</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">مراجعة نتيجة مقرر</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">تقديم طلب لإعادة تجميع أو مراجعة درجات الامتحان النهائي لمقرر معين.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-primary dark:text-blue-400 group-hover:underline">
                تقديم تظلم
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
            <button onClick={() => handleRequest('تقديم عذر غياب')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">sick</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">تقديم عذر غياب</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">رفع التقارير الطبية أو الأعذار القهرية لتبرير الغياب عن المحاضرات أو الامتحانات.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-primary dark:text-blue-400 group-hover:underline">
                رفع العذر
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
            <button onClick={() => handleRequest('طلب تغيير تخصص')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">change_circle</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">طلب تغيير تخصص</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">تقديم طلب للتحويل الداخلي بين الأقسام أو الكليات وفق الشروط المعلنة.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-primary dark:text-blue-400 group-hover:underline">
                بدء الإجراء
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
            <div className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">cancel_schedule_send</span>
                </div>
                <span className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800">
                  مغلق مؤقتاً
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">الانسحاب من مقرر</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">الانسحاب الأكاديمي من مقرر دراسي (W) قبل الموعد النهائي المحدد.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-slate-400 dark:text-slate-500 cursor-not-allowed">
                غير متاح حالياً
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white">آخر الطلبات المقدمة</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-3" scope="col">رقم الطلب</th>
                <th className="px-6 py-3" scope="col">نوع الخدمة</th>
                <th className="px-6 py-3" scope="col">تاريخ التقديم</th>
                <th className="px-6 py-3 text-center" scope="col">الحالة</th>
                <th className="px-6 py-3 text-left" scope="col">الإجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {serviceRequests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-3 font-mono">{req.id}</td>
                  <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">{req.title}</td>
                  <td className="px-6 py-3">{req.date}</td>
                  <td className="px-6 py-3 text-center">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
                      req.status === 'pending' ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800' :
                      'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800'
                    }`}>
                      {req.status === 'pending' ? 'قيد المراجعة' : 'مكتمل'}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <button className="text-primary hover:text-primary-dark text-xs font-bold hover:underline">التفاصيل</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-amber-50/40 dark:bg-amber-900/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-500">
              <span className="material-symbols-outlined">settings_accessibility</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">الخدمات الإدارية والمالية</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">شؤون الطلبة، البطاقات، والرسوم</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button onClick={() => handleRequest('إصدار بطاقة طالب')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent/50 dark:hover:border-accent/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">badge</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">إصدار بطاقة طالب</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">طلب إصدار بطاقة جامعية جديدة أو بدل فاقد/تالف.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
                تقديم طلب
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
            <button onClick={() => handleRequest('تصريح دخول مركبة')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent/50 dark:hover:border-accent/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">directions_car</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">تصريح دخول مركبة</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">تسجيل بيانات مركبتك للحصول على ملصق الدخول للمواقف الجامعية.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
                تسجيل مركبة
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
            <button onClick={() => handleRequest('تقسيط الرسوم الدراسية')} className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent/50 dark:hover:border-accent/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">تقسيط الرسوم الدراسية</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">تقديم طلب لجدولة دفعات الرسوم الدراسية للفصل الحالي.</p>
              <div className="mt-auto flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
                طلب تقسيط
                <span className="material-symbols-outlined text-base mr-1 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;