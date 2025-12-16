import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const Documents = () => {
  const { requests, addRequest } = useData();
  const [searchTerm, setSearchTerm] = useState("");

  const docRequests = requests.filter(req => req.category === 'document');

  const filteredRequests = docRequests.filter(req => 
    req.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    req.title.includes(searchTerm)
  );

  const handleAddRequest = (title: string, cost: string) => {
    addRequest({
      category: 'document',
      title,
      cost
    });
    alert(`تم تقديم طلب "${title}" بنجاح!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">المستندات والشهادات</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">المستندات والشهادات الرسمية</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">طلب استخراج المستندات الرسمية وكشوف الدرجات ومتابعة حالة الطلبات.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-accent">history_edu</span>
          <div>
            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">عدد الطلبات هذا الفصل</p>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{docRequests.length} طلبات</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-6">
        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary dark:text-primary-light">add_circle</span>
          طلب مستند جديد
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700 hover:border-primary/30 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">شهادة قيد</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">إثبات قيد الطالب بالكلية للجهات الرسمية.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">50 ج.م</span>
              <button onClick={() => handleAddRequest('شهادة قيد', '50 ج.م')} className="bg-white dark:bg-slate-700 text-primary dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                طلب
              </button>
            </div>
          </div>
          <div className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700 hover:border-primary/30 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">receipt_long</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">بيان درجات</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">كشف تفصيلي بالمواد والتقديرات الحاصل عليها.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">100 ج.م</span>
              <button onClick={() => handleAddRequest('بيان درجات', '100 ج.م')} className="bg-white dark:bg-slate-700 text-primary dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                طلب
              </button>
            </div>
          </div>
          <div className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700 hover:border-primary/30 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">إفادة تخرج</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">شهادة مؤقتة تفيد بإتمام متطلبات التخرج.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">75 ج.م</span>
              <button onClick={() => handleAddRequest('إفادة تخرج', '75 ج.م')} className="bg-white dark:bg-slate-700 text-primary dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                طلب
              </button>
            </div>
          </div>
          <div className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700 hover:border-primary/30 dark:hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">diversity_3</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">حسن سير وسلوك</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">شهادة تفيد بعدم توقيع أي عقوبات تأديبية.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">30 ج.م</span>
              <button onClick={() => handleAddRequest('حسن سير وسلوك', '30 ج.م')} className="bg-white dark:bg-slate-700 text-primary dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                طلب
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light">
              <span className="material-symbols-outlined">history</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">سجل الطلبات السابقة</h3>
              <p className="text-xs text-slate-500">تابع حالة طلباتك الحالية والسابقة</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <input 
                className="w-48 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pr-9 pl-3 py-1.5 text-xs focus:ring-1 focus:ring-primary" 
                placeholder="بحث في الطلبات..." 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            </div>
            <button className="p-1.5 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 rounded-tr-lg" scope="col">رقم الطلب</th>
                <th className="px-6 py-4" scope="col">نوع المستند</th>
                <th className="px-6 py-4" scope="col">تاريخ الطلب</th>
                <th className="px-6 py-4" scope="col">التكلفة</th>
                <th className="px-6 py-4 text-center" scope="col">الحالة</th>
                <th className="px-6 py-4 text-center rounded-tl-lg" scope="col">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredRequests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4 font-mono font-medium text-slate-500">{req.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`material-symbols-outlined ${
                        req.status === 'pending' ? 'text-amber-500' : 
                        req.status === 'ready' ? 'text-blue-500' : 'text-purple-500'
                      }`}>
                        {req.status === 'pending' ? 'receipt_long' : 
                         req.status === 'ready' ? 'verified' : 'school'}
                      </span>
                      <span className="font-medium text-slate-900 dark:text-white">{req.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <div className="text-slate-900 dark:text-white font-medium">{req.date}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">{req.cost}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      req.status === 'pending' ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-100 dark:border-amber-800' :
                      req.status === 'ready' ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-100 dark:border-green-800' :
                      'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                    }`}>
                      {req.status === 'pending' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>}
                      {req.status === 'ready' && <span className="material-symbols-outlined text-[14px]">check</span>}
                      {req.status === 'pending' ? 'قيد المعالجة' : req.status === 'ready' ? 'جاهز للاستلام' : 'تم الاستلام'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors" title="التفاصيل">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                      {req.status === 'ready' && (
                        <button className="text-primary hover:text-primary-dark transition-colors" title="تحميل نسخة رقمية">
                          <span className="material-symbols-outlined">download</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
          <p className="text-xs text-slate-500">عرض {filteredRequests.length} من أصل {docRequests.length} طلب</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-colors disabled:opacity-50">
              <span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary dark:border-primary bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_left</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;