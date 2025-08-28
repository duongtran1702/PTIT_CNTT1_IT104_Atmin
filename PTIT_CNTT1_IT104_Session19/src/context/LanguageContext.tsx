import { createContext } from 'react';

interface LanguageContextType {
    language: 'en' | 'vi';
    changeLanguage: (lang: 'vi' | 'en') => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'vi',
    changeLanguage: () => {},
});
