import { useState, useEffect } from 'react';
import Slider from '../component/Slider';
import Snowflakes from '../component/Snowflakes';

export default function HeroSection() {
  const sliderData = ['1.jpg', '2.jpg', '3.jpg'];
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(1);
      } else if (window.innerWidth < 1024) {
        setPerPage(3);
      } else {
        setPerPage(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='relative overflow-hidden'>
      <div className='bg-hero'></div>
      <Snowflakes />
      <div className='absolute top-0 left-0 bg-black/75 w-full h-full z-[1]'></div>
      <div className='relative z-[2] container-fluid flex flex-col items-center min-h-screen justify-center gap-4 py-8 text-white'>
        <h1 className='font-cormorant text-[13px] md:text-[40px] text-center'>The Wedding Ceremony Of</h1>
        <div className='container px-12 md:px-0'>
          <Slider sliderData={sliderData} perPage={perPage} autoplay={false} />
        </div>
        <h2 className='font-gardenia text-[80px] md:text-[130px] leading-none font-light'>Hizkia & Lysa</h2>
        <p className='font-medium font-roboto text-[12px] md:text-base'>SABTU, 23 03 2024</p>
        <div className='container'>
          <hr className='w-1/2 h-px mx-auto bg-white md:w-full' />
        </div>
        <p className='font-cormorant text-center text-[11px] md:text-base'>Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan.</p>
        <p className='font-meath text-[25px] md:text-[35px]'>(Kolose 3 : 14)</p>
      </div>
    </section>
  );
}
