'use client'

import Link from 'next/link';
import { ReactTyped } from 'react-typed';

const NavBar = () => {
    return (
        <>
            <nav id='naviNav' className='flex flex-row items-center justify-around p-10 text-3xl text-white underline list-none bg-purple-900 rounded-b-full animate-fade'>
                <li><Link href='/portfolio'><ReactTyped strings={['Portfolio']} typeSpeed={60} startDelay={100} showCursor={false} /></Link></li>
                <li><Link href='/'><ReactTyped strings={['Home']} typeSpeed={60} startDelay={2500} showCursor={false} /></Link></li>
                <li><Link href='https://github.com/Texas-WebGems'><ReactTyped strings={['Github']} typeSpeed={60} startDelay={5000} showCursor={false} /></Link></li>
            </nav>
        </>
    )
};

export default NavBar;