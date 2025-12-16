import React, { createContext, useContext, useState, useEffect } from 'react';

// --- Types ---
export interface User {
  nameAr: string;
  nameEn: string;
  id: string;
  major: string;
  gpa: number;
  earnedHours: number;
  level: string;
  emailUni: string;
  emailPersonal: string;
  mobile: string;
  address: string;
  image: string;
}

export interface Course {
  code: string;
  name: string;
  hours: number;
  type: 'compulsory' | 'elective';
  time: string; // e.g., "Sunday 09:00 AM" -> simplified for demo
  day: string; // "الأحد", "الاثنين", etc.
  startTime: string; // "09:00"
  endTime: string; // "10:30"
  room: string;
  lecturer: string;
}

export interface Transaction {
  id: string;
  date: string;
  method: string;
  amount: number;
  icon: string;
}

export interface Request {
  id: string;
  category: 'document' | 'service';
  title: string;
  date: string;
  cost?: string;
  status: 'pending' | 'ready' | 'completed' | 'rejected';
}

interface DataContextType {
  isAuthenticated: boolean;
  login: (id: string, password: string) => boolean;
  logout: () => void;

  user: User;
  updateUser: (data: Partial<User>) => void;
  
  availableCourses: Course[];
  registeredCourses: Course[];
  registerCourse: (course: Course) => void;
  dropCourse: (courseCode: string) => void;
  
  balance: number;
  paid: number;
  transactions: Transaction[];
  payTuition: (amount: number) => void;
  
  requests: Request[];
  addRequest: (req: Omit<Request, 'id' | 'date' | 'status'>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // --- Auth State ---
  // Check localStorage for persisted session
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuth') === 'true';
  });

  // --- Initial Mock Data ---
  const [user, setUser] = useState<User>({
    nameAr: "محمد عبد الوهاب",
    nameEn: "Mohammed Abdelwahab",
    id: "202503410",
    major: "هندسة البرمجيات",
    gpa: 3.85,
    earnedHours: 98,
    level: "السابع",
    emailUni: "s202503410@uni.edu.sa",
    emailPersonal: "mohammed.wahab@example.com",
    mobile: "0501234567",
    address: "الرياض، حي النخيل، شارع الأمير تركي بن عبد العزيز الأول",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTM9N0JVlPFHwLLXvtcV5PrpNko1FVOPU9HKHyv8OXTEEbElxt2L4xD1IElx7TFqASt82kqfRaiW5lLPsn-cRi5hWKZGYOHxx3dOu6urKQvsNi6hgnz_qUN8TiIM8CsUze9oVmcJYei-7GWEftId9lPIPGgLw3XR00oesrDpg6KHyweMGtrfnmqxok0i9dfJGZ-zjhTNzBFJgyBX5fToAgfUF_xnbNeD8XymUvg0KHkWAa7EiFArBCtnBH0bwGk2goM8CqftsnzU"
  });

  const [availableCourses, setAvailableCourses] = useState<Course[]>([
    { code: 'STAT501', name: 'الإحصاء الرياضي المتقدم', hours: 3, type: 'compulsory', time: 'الأحد 09:00 ص', day: 'الأحد', startTime: '09:00', endTime: '12:00', room: 'مبنى B - قاعة 201', lecturer: 'د. سامي الجابر' },
    { code: 'OR505', name: 'بحوث العمليات المتقدمة', hours: 3, type: 'elective', time: 'الأربعاء 10:00 ص', day: 'الأربعاء', startTime: '10:00', endTime: '01:00', room: 'مبنى C - قاعة 102', lecturer: 'أ.د. ناصر الشمري' },
    { code: 'RES500', name: 'مناهج البحث العلمي', hours: 2, type: 'elective', time: 'الخميس 09:00 ص', day: 'الخميس', startTime: '09:00', endTime: '11:00', room: 'قاعة السمينار', lecturer: 'د. هدى العلي' },
    { code: 'CS505', name: 'الحوسبة السحابية', hours: 3, type: 'elective', time: 'الثلاثاء 10:00 ص', day: 'الثلاثاء', startTime: '10:00', endTime: '01:00', room: 'معمل 4', lecturer: 'د. فهد الغامدي' },
  ]);

  const [registeredCourses, setRegisteredCourses] = useState<Course[]>([
    { code: 'CS502', name: 'تحليل البيانات الكبيرة', hours: 3, type: 'compulsory', time: 'الاثنين 12:00 م', day: 'الاثنين', startTime: '12:00', endTime: '03:00', room: 'مبنى C - قاعة 105', lecturer: 'د. أيمن زكي' },
    { code: 'IS510', name: 'أمن المعلومات والشبكات', hours: 3, type: 'elective', time: 'الثلاثاء 02:00 م', day: 'الثلاثاء', startTime: '02:00', endTime: '05:00', room: 'معامل الحاسب - معمل 2', lecturer: 'أ.د. سارة فهمي' },
  ]);

  const [balance, setBalance] = useState(4000);
  const [paid, setPaid] = useState(8500);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'TRX-98210022', date: '20 يناير 2025', method: 'بطاقة مدى (**** 1234)', amount: 5000, icon: 'credit_card' },
    { id: 'TRX-98155001', date: '15 يناير 2025', method: 'تحويل بنكي', amount: 3500, icon: 'account_balance' }
  ]);

  const [requests, setRequests] = useState<Request[]>([
    { id: 'REQ-2025-089', category: 'document', title: 'بيان درجات (عربي)', date: '10 مايو 2025', cost: '100 ج.م', status: 'pending' },
    { id: 'REQ-2025-884', category: 'service', title: 'طلب إفادة قيد', date: '20 مايو 2025', status: 'pending' },
    { id: 'REQ-2025-042', category: 'document', title: 'شهادة قيد', date: '25 أبريل 2025', cost: '50 ج.م', status: 'ready' },
    { id: 'REQ-2025-401', category: 'service', title: 'تصريح دخول مركبة', date: '10 يناير 2025', status: 'completed' }
  ]);

  // --- Auth Actions ---
  const login = (id: string, password: string) => {
    // Simple mock validation
    if (id && password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuth');
  };

  // --- Data Actions ---

  const updateUser = (data: Partial<User>) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  const registerCourse = (course: Course) => {
    setAvailableCourses(prev => prev.filter(c => c.code !== course.code));
    setRegisteredCourses(prev => [...prev, course]);
  };

  const dropCourse = (courseCode: string) => {
    const course = registeredCourses.find(c => c.code === courseCode);
    if (course) {
      setRegisteredCourses(prev => prev.filter(c => c.code !== courseCode));
      setAvailableCourses(prev => [...prev, course]);
    }
  };

  const payTuition = (amount: number) => {
    if (amount > balance) return;
    setBalance(prev => prev - amount);
    setPaid(prev => prev + amount);
    const newTrx: Transaction = {
      id: `TRX-${Math.floor(Math.random() * 90000000)}`,
      date: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
      method: 'بطاقة ائتمانية',
      amount: amount,
      icon: 'credit_card'
    };
    setTransactions(prev => [newTrx, ...prev]);
  };

  const addRequest = (req: Omit<Request, 'id' | 'date' | 'status'>) => {
    const newReq: Request = {
      ...req,
      id: `REQ-2025-${Math.floor(Math.random() * 9000) + 1000}`,
      date: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: 'pending'
    };
    setRequests(prev => [newReq, ...prev]);
  };

  return (
    <DataContext.Provider value={{
      isAuthenticated, login, logout,
      user, updateUser,
      availableCourses, registeredCourses, registerCourse, dropCourse,
      balance, paid, transactions, payTuition,
      requests, addRequest
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};