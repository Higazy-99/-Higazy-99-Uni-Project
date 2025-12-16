import React, { useState } from 'react';

const Transcript = () => {
  const [semester, setSemester] = useState("الفصل الأول 2024-2025");

  const semesters = {
    "الفصل الأول 2024-2025": {
      hours: 15,
      points: 57.25,
      gpa: 3.82,
      courses: [
        { code: 'SE201', name: 'تصميم البرمجيات', hours: 3, grade: 95, letter: 'A+', points: 4.00 },
        { code: 'CS204', name: 'هياكل البيانات', hours: 3, grade: 88, letter: 'A', points: 3.75 },
        { code: 'MATH202', name: 'الرياضيات المتقطعة', hours: 3, grade: 82, letter: 'B+', points: 3.50 },
        { code: 'IS201', name: 'مقدمة في نظم المعلومات', hours: 2, grade: 90, letter: 'A', points: 3.75 },
        { code: 'ENG102', name: 'الكتابة التقنية', hours: 2, grade: 96, letter: 'A+', points: 4.00 },
        { code: 'GS101', name: 'مهارات القيادة', hours: 2, grade: 98, letter: 'A+', points: 4.00 },
      ]
    },
    "الفصل الثاني 2023-2024": {
      hours: 18,
      points: 68.5,
      gpa: 3.80,
      courses: [
        { code: 'CS101', name: 'مقدمة في البرمجة', hours: 4, grade: 92, letter: 'A', points: 3.75 },
        { code: 'MATH101', name: 'تفاضل وتكامل 1', hours: 3, grade: 85, letter: 'B+', points: 3.50 },
        { code: 'PHY101', name: 'فيزياء عامة 1', hours: 4, grade: 90, letter: 'A', points: 3.75 },
        { code: 'ENG101', name: 'لغة إنجليزية 1', hours: 3, grade: 95, letter: 'A+', points: 4.00 },
        { code: 'GS100', name: 'ثقافة إسلامية', hours: 2, grade: 98, letter: 'A+', points: 4.00 },
        { code: 'CS102', name: 'مختبر برمجة', hours: 2, grade: 94, letter: 'A', points: 3.75 },
      ]
    }
  };

  const currentData = semesters[semester as keyof typeof semesters] || semesters["الفصل الأول 2024-2025"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">النتائج السابقة</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">سجل النتائج والدرجات</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">استعراض سجل الدرجات للفصول الدراسية السابقة والمعدلات التراكمية.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-accent">grade</span>
          <div>
            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">المعدل العام</p>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">ممتاز (3.85)</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-4 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full md:w-auto flex-1">
          <div className="relative w-full md:w-72">
            <label className="absolute -top-2.5 right-3 px-1 bg-white dark:bg-slate-900 text-xs font-semibold text-primary dark:text-blue-400">اختر الفصل الدراسي</label>
            <select 
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none font-medium cursor-pointer"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option>الفصل الأول 2024-2025</option>
              <option>الفصل الثاني 2023-2024</option>
            </select>
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
          <button className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
        <div className="flex items-center divide-x divide-x-reverse divide-slate-200 dark:divide-slate-700 w-full md:w-auto justify-center md:justify-end bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
          <div className="px-4 text-center">
            <p className="text-[11px] text-slate-500 mb-0.5">ساعات الفصل</p>
            <p className="font-bold text-slate-800 dark:text-slate-200">{currentData.hours}</p>
          </div>
          <div className="px-4 text-center">
            <p className="text-[11px] text-slate-500 mb-0.5">النقاط الفصلية</p>
            <p className="font-bold text-slate-800 dark:text-slate-200">{currentData.points}</p>
          </div>
          <div className="px-4 text-center">
            <p className="text-[11px] text-slate-500 mb-0.5">المعدل الفصلي</p>
            <p className="font-bold text-primary dark:text-blue-400 text-lg">{currentData.gpa}</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <span className="material-symbols-outlined">history_edu</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">نتائج المقررات</h3>
              <p className="text-xs text-slate-500">حالة الفصل: <span className="text-green-600 font-bold">ناجح</span></p>
            </div>
          </div>
          <button onClick={() => alert("جاري تحميل ملف PDF...")} className="text-sm text-slate-500 hover:text-primary flex items-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            <span>تصدير PDF</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4" scope="col">كود المقرر</th>
                <th className="px-6 py-4" scope="col">اسم المقرر</th>
                <th className="px-6 py-4 text-center" scope="col">الساعات</th>
                <th className="px-6 py-4 text-center" scope="col">الدرجة</th>
                <th className="px-6 py-4 text-center" scope="col">التقدير</th>
                <th className="px-6 py-4 text-center" scope="col">النقاط</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {currentData.courses.map((course) => (
                <tr key={course.code} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">{course.code}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{course.name}</td>
                  <td className="px-6 py-4 text-center">{course.hours}</td>
                  <td className="px-6 py-4 text-center font-bold">{course.grade}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-xs ${
                      course.letter.startsWith('A') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      course.letter.startsWith('B') ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {course.letter}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">{course.points.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
              <tr>
                <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300" colSpan={2}>المجموع الفصلي</td>
                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">{currentData.hours}</td>
                <td className="px-6 py-4 text-center"></td>
                <td className="px-6 py-4 text-center"></td>
                <td className="px-6 py-4 text-center font-bold text-primary dark:text-blue-400">{currentData.points}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button 
          onClick={() => window.print()}
          className="bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
        >
          <span className="material-symbols-outlined">print</span>
          طباعة السجل الأكاديمي
        </button>
      </div>
    </div>
  );
};

export default Transcript;