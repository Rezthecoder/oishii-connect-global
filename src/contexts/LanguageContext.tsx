import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    about: 'About',
    menu: 'Menu',
    gallery: 'Gallery',
    staff: 'Staff',
    location: 'Location',
    contact: 'Contact',
    news: 'News',
    promotions: 'Promotions',
    
    // Hero Section
    welcome: 'Welcome to',
    restaurantName: 'Oishii Connect',
    heroSubtitle: 'Authentic Japanese Cuisine with Modern Flair',
    reserveTable: 'Reserve a Table',
    viewMenu: 'View Menu',
    
    // About Section
    aboutTitle: 'Our Story',
    aboutText: 'At Oishii Connect, we bridge traditional Japanese culinary artistry with contemporary dining experiences. Our master chefs craft each dish with precision, using only the finest ingredients sourced from Japan and local markets.',
    
    // Menu Section
    menuTitle: 'Our Menu',
    appetizers: 'Appetizers',
    sashimi: 'Fresh Sashimi',
    mainCourses: 'Main Courses',
    desserts: 'Desserts',
    
    // Staff Section
    staffTitle: 'Meet Our Team',
    headChef: 'Head Chef',
    sousChef: 'Sous Chef',
    manager: 'Restaurant Manager',
    
    // Contact Section
    contactTitle: 'Contact Us',
    contactSubtitle: 'We would love to hear from you',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    message: 'Message',
    submit: 'Send Message',
    
    // News Section
    newsTitle: 'Latest News',
    promotionsTitle: 'Current Promotions',
    
    // Footer
    followUs: 'Follow Us',
    hours: 'Opening Hours',
    mondayFriday: 'Monday - Friday: 11:30 AM - 10:00 PM',
    weekend: 'Saturday - Sunday: 5:00 PM - 11:00 PM',
  },
  jp: {
    // Navigation
    about: '私たちについて',
    menu: 'メニュー',
    gallery: 'ギャラリー',
    staff: 'スタッフ',
    location: '場所',
    contact: 'お問い合わせ',
    news: 'ニュース',
    promotions: 'プロモーション',
    
    // Hero Section
    welcome: 'ようこそ',
    restaurantName: 'おいしいコネクト',
    heroSubtitle: 'モダンな感性で作る本格和食',
    reserveTable: 'テーブルを予約',
    viewMenu: 'メニューを見る',
    
    // About Section
    aboutTitle: '私たちの物語',
    aboutText: 'おいしいコネクトでは、伝統的な日本の料理芸術と現代的なダイニング体験を融合させています。私たちの料理長は、日本と地元市場から調達した最高品質の食材のみを使用し、精密に各料理を仕上げます。',
    
    // Menu Section
    menuTitle: 'メニュー',
    appetizers: '前菜',
    sashimi: '新鮮な刺身',
    mainCourses: 'メインコース',
    desserts: 'デザート',
    
    // Staff Section
    staffTitle: 'チームメンバー',
    headChef: '料理長',
    sousChef: '副料理長',
    manager: 'レストランマネージャー',
    
    // Contact Section
    contactTitle: 'お問い合わせ',
    contactSubtitle: 'ご連絡をお待ちしております',
    name: 'お名前',
    email: 'メールアドレス',
    phone: '電話番号',
    address: 'ご住所',
    message: 'メッセージ',
    submit: 'メッセージを送信',
    
    // News Section
    newsTitle: '最新ニュース',
    promotionsTitle: '現在のプロモーション',
    
    // Footer
    followUs: 'フォローしてください',
    hours: '営業時間',
    mondayFriday: '月曜日 - 金曜日: 11:30 AM - 10:00 PM',
    weekend: '土曜日 - 日曜日: 5:00 PM - 11:00 PM',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};