'use client'

import Image from 'next/image';
import Link from 'next/link';

const PortfolioPage = () => {
    return (
        <section id='portfolio' className='grid items-center justify-center grid-cols-2 gap-12 py-20 text-center text-black'>
            <div className='flex flex-col items-center justify-center'>
                <Link className='items-center' href='https:/healthdata.dshs.texas.gov/' target='_blank'>
                    <h3 className=''>Texas Health Data</h3>
                    <Image className='m-auto' src='https://d248tdztscvoqa.cloudfront.net/thd-ss.png' width={288} height={288} alt='Texas Health Data' />
                    <pre>HTML, CSS, JavaScript, JSON, C#, Razor, .NET, Bootstrap, Slick Carousel</pre>
                </Link>
            </div>
            {/* <div className='flex flex-col items-center justify-center '>
                <Link href='https://www.gianinecarbonedesigns.com/' target='_blank>
                <h3 className=''>Gianine Carbone Designs</h3>
                <p>Image Coming Soon</p>
                <pre>Squarespace, Shopify, CSS, JavaScript, Liquid, DNS, SEO</pre>
                <pre>Website Migration and Instagram Feed Install</pre>
                </Link>
            </div> */}
            <div className='flex flex-col items-center justify-center'>
                <Link href='https://www.texaswebgems.com/' target='_blank'>
                    <h3 className=''>Texas WebGems</h3>
                    <Image src='https://d248tdztscvoqa.cloudfront.net/twg-ss.png' width={288} height={288} alt='Texas WebGems' />
                    <pre>Next.js, Tailwind CSS</pre>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center col-span-2'>
                <Link href='https://dshs.texas.gov/' target='_blank'>
                    <h3 className=''>DSHS Website</h3>
                    <Image src='https://d248tdztscvoqa.cloudfront.net/dshs-ss.png' width={288} height={288} alt='Texas Department of State Health Services' />
                    <pre>Drupal, CSS, JSON</pre>
                </Link>
            </div>
        </section>
    );
}

export default PortfolioPage;
