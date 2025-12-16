import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const Profile = () => {
  const { user, updateUser } = useData();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    mobile: user.mobile,
    personalEmail: user.emailPersonal,
    address: user.address
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser({
      mobile: formData.mobile,
      emailPersonal: formData.personalEmail,
      address: formData.address
    });
    setIsEditing(false);
    alert('تم حفظ التعديلات بنجاح!');
  };

  const handleChangePassword = () => {
    alert('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>الرئيسية</span>
            <span className="material-symbols-outlined text-xs rtl:rotate-180">chevron_right</span>
            <span className="text-primary font-medium">الملف الشخصي</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">الملف الشخصي للطالب</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">عرض وتحديث البيانات الشخصية والأكاديمية ومعلومات الاتصال.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleChangePassword}
            className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all text-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">lock_reset</span>
            تغيير كلمة المرور
          </button>
          {isEditing ? (
            <button 
              onClick={handleSave}
              className="bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl focus:outline-none transition-all text-sm flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">save</span>
              حفظ التعديلات
            </button>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl focus:outline-none transition-all text-sm flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">edit</span>
              تعديل البيانات
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/10 to-transparent"></div>
            <div className="relative mb-4 group cursor-pointer z-10">
              <div className="w-32 h-32 rounded-full p-1.5 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-md">
                <img alt="Student Photo" className="h-full w-full rounded-full object-cover" src={user.image}/>
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light transition-colors border-2 border-white dark:border-slate-900" title="تحديث الصورة">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
            <div className="z-10">
              <h2 className="font-bold text-xl text-slate-900 dark:text-white">{user.nameAr}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 mb-3">ID: {user.id}</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                منتظم في الدراسة
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-5">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary dark:text-accent">school</span>
              الحالة الأكاديمية
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-400">المعدل التراكمي (GPA)</span>
                  <span className="font-bold text-primary dark:text-accent">{user.gpa} / 4.00</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-primary dark:bg-accent h-2 rounded-full" style={{width: `${(user.gpa/4)*100}%`}}></div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">عدد الساعات المكتسبة</span>
                  <span className="font-bold text-slate-800 dark:text-white">{user.earnedHours} ساعة</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">المستوى الحالي</span>
                  <span className="font-bold text-slate-800 dark:text-white">{user.level}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
              <span className="material-symbols-outlined">supervisor_account</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">المرشد الأكاديمي</p>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">د. أحمد محمود علي</h4>
              <a className="text-primary text-xs hover:underline mt-0.5 inline-block" href="#">مراسلة المرشد</a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500">badge</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">البيانات الشخصية</h3>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">الاسم بالكامل (عربي)</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="text" value={user.nameAr}/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">الاسم بالكامل (إنجليزي)</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="text" value={user.nameEn}/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">رقم الهوية الوطنية / الإقامة</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow font-mono" type="text" defaultValue="1025487963" readOnly/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">الجنسية</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" disabled>
                  <option selected>سعودي</option>
                  <option>مصري</option>
                  <option>أردني</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">تاريخ الميلاد</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" type="date" defaultValue="1998-05-15" readOnly/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">الجنس</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" disabled>
                  <option selected>ذكر</option>
                  <option>أنثى</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500">menu_book</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">البرنامج الأكاديمي</h3>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">الكلية</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="text" value="كلية الحاسبات والذكاء الاصطناعي"/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">القسم</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="text" value="علوم الحاسب"/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">الدرجة العلمية</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="text" value="ماجستير"/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">التخصص الدقيق</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="text" value={user.major}/>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">سنة الالتحاق</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="text" value="2023"/>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500">contact_phone</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">معلومات الاتصال</h3>
              </div>
              <button onClick={() => setIsEditing(!isEditing)} className="text-xs text-primary font-bold hover:underline">
                {isEditing ? 'إلغاء التعديل' : 'تحديث البيانات'}
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">رقم الهاتف الجوال</label>
                <div className="relative">
                  <input 
                    name="mobile"
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow dir-ltr text-right ${isEditing ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-slate-50 dark:bg-slate-800 border-transparent'}`}
                    type="tel" 
                    value={formData.mobile}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">SA (+966)</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">البريد الإلكتروني الجامعي</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow" readOnly type="email" value={user.emailUni}/>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">البريد الإلكتروني الشخصي</label>
                <input 
                  name="personalEmail"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow ${isEditing ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-slate-50 dark:bg-slate-800 border-transparent'}`}
                  type="email" 
                  value={formData.personalEmail}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">العنوان الحالي</label>
                <textarea 
                  name="address"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow ${isEditing ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-slate-50 dark:bg-slate-800 border-transparent'}`}
                  rows={2} 
                  value={formData.address}
                  onChange={handleChange}
                  readOnly={!isEditing}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;