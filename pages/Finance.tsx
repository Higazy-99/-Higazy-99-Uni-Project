import React from 'react';
import { useData } from '../context/DataContext';

const Finance = () => {
  const { balance, paid, transactions, payTuition } = useData();

  const handlePayment = () => {
    if (balance <= 0) {
      alert("لا توجد رسوم مستحقة للدفع حالياً.");
      return;
    }
    
    // Simulate paying current balance
    payTuition(balance);
    alert("تمت عملية الدفع بنجاح!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">الرسوم الدراسية</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">الوضع المالي والسداد</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">تفاصيل الرسوم الدراسية المستحقة والمدفوعات السابقة والرصيد الحالي.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-accent">school</span>
          <div>
            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">الفصل الدراسي</p>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">الثاني 2024-2025</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/10 rounded-bl-[4rem] transition-all duration-300 -mr-4 -mt-4"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <span className="material-symbols-outlined text-2xl">account_balance</span>
              </div>
              <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">الفصل الحالي</span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">إجمالي الرسوم المستحقة</h3>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{(balance + paid).toLocaleString()}</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">ريال</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-24 h-24 bg-green-50 dark:bg-green-900/10 rounded-bl-[4rem] transition-all duration-300 -mr-4 -mt-4"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                <span className="material-symbols-outlined text-2xl">check_circle</span>
              </div>
              <span className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">تم السداد</span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">إجمالي المدفوعات</h3>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{paid.toLocaleString()}</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">ريال</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden group border-r-4 border-r-accent/60 dark:border-r-accent/60">
          <div className="absolute right-0 top-0 w-24 h-24 bg-amber-50 dark:bg-amber-900/10 rounded-bl-[4rem] transition-all duration-300 -mr-4 -mt-4"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm">
                <span className="material-symbols-outlined text-2xl">pending_actions</span>
              </div>
              <span className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">مستحق الدفع</span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">الرصيد المتبقي</h3>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{balance.toLocaleString()}</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">ريال</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">تفاصيل الرسوم المستحقة</h3>
              <p className="text-xs text-slate-500">الفصل الدراسي الثاني 2024-2025</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 rounded-tr-lg" scope="col">البند</th>
                <th className="px-6 py-4" scope="col">التفاصيل</th>
                <th className="px-6 py-4" scope="col">تاريخ الاستحقاق</th>
                <th className="px-6 py-4 text-center" scope="col">المبلغ (ريال)</th>
                <th className="px-6 py-4 text-center rounded-tl-lg" scope="col">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">رسوم ساعات معتمدة</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">تسجيل 11 ساعة معتمدة (تخصص)</td>
                <td className="px-6 py-4 font-mono text-xs">2025-01-15</td>
                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-slate-200">11,000</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-100 dark:border-green-800">مدفوع</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">رسوم خدمات طلابية</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">رسوم فصلية ثابتة</td>
                <td className="px-6 py-4 font-mono text-xs">2025-01-15</td>
                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-slate-200">500</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-100 dark:border-green-800">مدفوع</span>
                </td>
              </tr>
              <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group ${balance > 0 ? 'bg-amber-50/10 dark:bg-amber-900/5' : ''}`}>
                <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">رسوم الكتب الدراسية</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">مجموعة كتب الفصل الدراسي الثاني</td>
                <td className="px-6 py-4 font-mono text-xs">2025-02-01</td>
                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-slate-200">1,000</td>
                <td className="px-6 py-4 text-center">
                  {balance > 0 ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-100 dark:border-amber-800">غير مدفوع</span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-100 dark:border-green-800">مدفوع</span>
                  )}
                </td>
              </tr>
              {balance > 0 && (
                 <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group bg-amber-50/10 dark:bg-amber-900/5">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">رسوم تأخير</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">غرامة تأخير سداد القسط الثاني</td>
                  <td className="px-6 py-4 font-mono text-xs">2025-02-15</td>
                  <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-slate-200">3,000</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-100 dark:border-amber-800">غير مدفوع</span>
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot className="bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
              <tr>
                <td className="px-6 py-4 text-left font-bold text-slate-600 dark:text-slate-400" colSpan={3}>الإجمالي</td>
                <td className="px-6 py-4 text-center font-extrabold text-lg text-primary dark:text-white">{(12500 + (balance > 0 ? 3000 : 0)).toLocaleString()}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <span className="material-symbols-outlined">history</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">سجل عمليات الدفع</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">آخر العمليات المالية المسجلة</p>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            كشف حساب PDF
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4" scope="col">رقم المرجع</th>
                <th className="px-6 py-4" scope="col">التاريخ</th>
                <th className="px-6 py-4" scope="col">وسيلة الدفع</th>
                <th className="px-6 py-4 text-center" scope="col">المبلغ (ريال)</th>
                <th className="px-6 py-4 text-center" scope="col">الإيصال</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {transactions.map((trx) => (
                <tr key={trx.id} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">{trx.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-medium">
                      <span>{trx.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400">{trx.icon}</span>
                      <span>{trx.method}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-green-600 dark:text-green-400">+ {trx.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="تحميل الإيصال">
                      <span className="material-symbols-outlined">description</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800 mt-6">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          * يتم تحديث البيانات المالية تلقائياً خلال 24 ساعة من عملية السداد.
        </div>
        <button 
          onClick={handlePayment}
          disabled={balance <= 0}
          className={`bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 ${balance <= 0 ? 'opacity-50 cursor-not-allowed transform-none' : ''}`}
        >
          <span className="material-symbols-outlined">credit_card</span>
          {balance > 0 ? `سداد الرسوم الآن (${balance.toLocaleString()} ريال)` : 'تم سداد جميع الرسوم'}
        </button>
      </div>
    </div>
  );
};

export default Finance;