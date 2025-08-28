import { useState } from 'react';
import ThemeApp from '../components/ThemeApp';
import { ThemeContext } from './ThemeContext';

export default function ThemeProvider() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((pre) => (pre === 'light' ? 'dark' : 'light'));
        console.log(theme);
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeApp />
        </ThemeContext.Provider>
    );
}
