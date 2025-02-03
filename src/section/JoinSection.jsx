export default function JoinSection() {
  return (
    <section className='py-20 md:py-12 bg-[#1e1e1e]  relative overflow-hidden'>
      <div className='bg-join'></div>
      <div className='absolute top-0 left-0 bg-black/50 w-full h-full z-[1]'></div>
      <div className='container z-[2] relative text-white flex flex-col items-center gap-4'>
        <p className=' text-[13px] md:text-[30px] leading-none'>Join Our Wedding</p>
        <p className='font-gardenia text-[80px] md:text-[130px] leading-none'>Hizkia & Lysa</p>
        <p className='font-roboto leading-none uppercase font-medium md:text-base text-[10px]'>Sabtu, 23 03 2024</p>
      </div>
    </section>
  );
}
