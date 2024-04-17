"use client"

import sunIcon from '../public/sun.svg'
import moonIcon from '../public/moon.svg'
import { useEffect, useState } from 'react';
import Image from 'next/image';


const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)
    const [icon, setIcon] = useState(moonIcon)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            setDarkMode(false)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
            setIcon(moonIcon) 
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
            setIcon(sunIcon)
        }
    }, [darkMode])

    return (
        <div onClick={() => setDarkMode(!darkMode)} className='cursor-pointer'>
            <Image src={icon} alt=""/>
        </div>
    )
}

export default ThemeToggle