import { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import ChangeLanguage from '../components/ChangeLanguage';

export default function LanguageProvider() {
    const [language, setLanguage] = useState<'vi' | 'en'>('vi');

    const changeLanguage = (lang: 'en' | 'vi') => {
        setLanguage(lang);
    };
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            <ChangeLanguage></ChangeLanguage>
        </LanguageContext.Provider>
    );
}
