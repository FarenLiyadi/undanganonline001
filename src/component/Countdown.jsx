import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(countdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='grid grid-cols-4'>
      <div className='flex flex-col items-center gap-0'>
        <p className='text-[25px] md:text-[50px] font-kulim leading-none'>{timeLeft.days}</p>
        <p className='text-[10px] md:text-[30px] font-kulim leading-none'>D</p>
      </div>
      <div className='flex flex-col items-center gap-0'>
        <p className='text-[25px] md:text-[50px] font-kulim leading-none'>{timeLeft.hours}</p>
        <p className='text-[10px] md:text-[30px] font-kulim leading-none'>H</p>
      </div>
      <div className='flex flex-col items-center gap-0'>
        <p className='text-[25px] md:text-[50px] font-kulim leading-none'>{timeLeft.minutes}</p>
        <p className='text-[10px] md:text-[30px] font-kulim leading-none'>M</p>
      </div>
      <div className='flex flex-col items-center gap-0'>
        <p className='text-[25px] md:text-[50px] font-kulim leading-none'>{timeLeft.seconds}</p>
        <p className='text-[10px] md:text-[30px] font-kulim leading-none'>S</p>
      </div>
    </div>
  );
}
