'use client'

import Link from 'next/link';
import { ReactTyped } from 'react-typed';

const FootNavBar = () => {
    return (
        <>
            <nav id='naviNav' className='flex flex-row items-center justify-around p-10 text-3xl text-white underline list-none bg-purple-900 rounded-t-full animate-fade'>
                <li><Link href='https://www.linkedin.com/in/GemAfaWell'><ReactTyped strings={['LinkedIn']} typeSpeed={60} startDelay={100} showCursor={false} /></Link></li>
                <li><Link href='https://www.texaswebgems.com'><ReactTyped strings={['Texas WebGems']} typeSpeed={60} startDelay={2500} showCursor={false} /></Link></li>
                <li><Link href='mailto:gemini@gemafawell.dev'><ReactTyped strings={['Email Me']} typeSpeed={60} startDelay={5000} showCursor={false} /></Link></li>
            </nav>
        </>
    )
};

export default FootNavBar;