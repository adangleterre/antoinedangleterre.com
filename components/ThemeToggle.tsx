import React from 'react';
import sunIcon from '../public/sun.svg';
import moonIcon from '../public/moon.svg';
import Image from 'next/image';
import useTheme from "@/hooks/useTheme";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div onClick={toggleTheme} className='cursor-pointer'>
            <Image src={theme === 'light' ? sunIcon : moonIcon} alt="Theme toggle"/>
        </div>
    )
}

export default ThemeToggle;