'use client'

import Link from 'next/link';
import { useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { useForm } from 'react-hook-form';
// import MyEditor from '../libraries/TextEditorComponent';
import Image from 'next/image';

const abraCadabra = () => {
    useEffect(() => {
        const post = document.getElementById('postName');
        post ? setTimeout(() => {
            post.style.display = 'flex';
        }, 3500) : undefined;
    });
};

const alakazam = () => {
    useEffect(() => {
        const overlay = document.querySelector('#overlay');
        overlay ? setTimeout(() => {
            overlay.style.display = 'none';
        }, 8000) : undefined;
    });
};

const presto = () => {
    useEffect(() => {
        const homepage = document.querySelector('#homepage');
        homepage ? setTimeout(() => {
            homepage.style.display = 'flex';
        }, 8000) : undefined;
    });
};

const HomePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='text-black'>
            <section id='overlay' className='w-full m-auto animate-sweep' onLoad={alakazam()} style={{ height: '100vh', animationDelay: '8000ms' }}>
                <div id='intro' className='flex flex-col items-center justify-center my-48 text-center'>
                    <pre className='text-4xl'><ReactTyped strings={['Hi, I\'m']} typeSpeed={50} showCursor={false} /></pre>
                    <pre className='text-6xl'><ReactTyped strings={['Ms. Gemini S. Powell']} startDelay={1000} typeSpeed={50} showCursor={false} /></pre>
                    <div id='postName' className='hidden animate-fade' onLoad={abraCadabra()}>
                        <pre className='text-3xl'>
                            and I create stunning websites<br />
                            using the JavaScript MERN stack!
                        </pre>
                    </div>
                </div>
            </section>
            <section id='homepage' onLoad={presto()} className='hidden w-full h-full animate-fade'>
                <div className='p-10 m-auto text-center md:grid md:grid-cols-2 md:grid-rows-2 sm:flex sm:flex-col md:w-3/4 gap-60'>
                    <div className='flex flex-col items-center justify-center pt-20 pb-8'>
                        <h1 className='pb-8 text-3xl font-bold'>Who am I?</h1>
                        <p>I'm Gemini! I'm a mid-30s woman who entered both software engineering and transitioning as a late bloomer. I'm a mid-level freelance frontend developer and sole proprietor of <Link href='https://www.texaswebgems.com'>Texas WebGems</Link>, a web development and design firm based in Austin, Texas.</p>
                    </div>
                    <div className='pt-20 pb-8 mr-6'>
                        <Image className='rounded-full sm:hidden md:block' src='https://d248tdztscvoqa.cloudfront.net/twg.png' width={512} height={384} alt='Texas WebGems' />
                    </div>
                    <div className='ml-6'>
                        <Image className='rounded-full sm:hidden md:block' src='https://d248tdztscvoqa.cloudfront.net/fegbloglogo.png' width={512} height={384} alt='Front End Gems' />
                    </div>
                    <div className='flex flex-col items-center justify-center p-8'>
                        <h1 className='pb-8 text-3xl font-bold'>What are my specialties?</h1>
                        <p>I am a full-stack JavaScript developer, with proficiency specifically in the MERN stack. My favorite library is React, my favorite framework is Next.js, and I've picked up a load of ancillary skills along the way...</p>
                    </div>
                    <div className='flex flex-col items-center justify-center p-8'>
                        <h1 className='pb-8 text-3xl font-bold'>Who have I worked with?</h1>
                        <p>Most recently, I was a programmer for the Texas Department of State Health Services. I've booked and completed work for seven clients through Texas WebGems. I have also worked with CircleClick, a marketing firm. I've done volunteer work for Out in Tech. I've worked for the 100Devs Agency. We've done a lot to learn the skills we have today, girls!</p>
                    </div>
                    <div>
                        <Image className='rounded-full sm:hidden md:block' src='https://d248tdztscvoqa.cloudfront.net/GP Banner.png' width={512} height={384} alt='Gemini Powell: I hit different logo with a JSX closing tag in the center' />
                    </div>
                    <div>
                        <Image className='rounded-full sm:hidden md:block' src='https://d248tdztscvoqa.cloudfront.net/me.jpg' width={512} height={384} alt='Ms. Gemini S. Powell' />
                    </div>
                    <div className='flex flex-col items-center justify-center pt-8 pb-20'>
                        <h1 className='pb-8 text-3xl font-bold'>Contact me!</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-2 gap-4'>
                                <input className='w-11/12 p-2 mx-auto my-2 text-center border-4 border-black rounded-lg' type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                                <input className='w-11/12 p-2 mx-auto my-2 text-center border-4 border-black rounded-lg' type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                                <input className='w-11/12 p-2 mx-auto my-2 text-center border-4 border-black rounded-lg' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                <input className='w-11/12 p-2 mx-auto my-2 text-center border-4 border-black rounded-lg' type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                            </div>
                            <div className='w-full m-auto my-8 text-center bg-white rounded-lg'>
                                {/* <MyEditor /> */}
                                <textarea className='w-full m-auto text-center rounded-lg resize' placeholder='how can i help you today, my friend?' />
                            </div>
                            <div className='w-full m-auto'>
                                <input type="submit" className='px-4 py-2 bg-yellow-200 border-4 border-black rounded-lg' />
                            </div>
                        </form>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default HomePage;