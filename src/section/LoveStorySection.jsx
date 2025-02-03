import Snowflakes from '../component/Snowflakes';

export default function LoveStorySection() {
  return (
    <section className='bg-[#1e1e1e] py-12 relative overflow-hidden'>
      <div className='bg-lovestory'></div>
      <div className='absolute top-0 left-0 bg-black/75 w-full h-full z-[1]'></div>
      <div className='container text-white z-[2] relative'>
        <Snowflakes />
        <h2 className='uppercase text-[40px] md:text-[75px] text-center leading-none'>Love Story</h2>
        <p className='text-center font-medium text-[12px] md:text-[20px] leading-none mt-4 md:mt-0'>
          Marriage is the golden ring in a chain whose beginning <br />
          is a glance and whose ending is eternity
        </p>
        <div className='flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 mt-8'>
          <div className='relative group'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-[0.8s] ease'></div>
            <div className='absolute w-full h-auto p-8 bottom-0 translate-x-[-20px] opacity-0 group-hover:translate-x-[0] group-hover:opacity-100 transtion-all duration-[0.8s] ease'>
              <h5 className='font-ballet text-[35px] tracking-[5px]'>First Meet</h5>
              <p className='text-[12px]'>Awal perkenalan kami dimulai sejak Sekolah Menengah Pertama (SMP) di sekolah yang sama di tahun 2013</p>
            </div>
            <img src='/img/love1.jpg' />
          </div>
          <div className='relative group'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-[0.8s] ease'></div>
            <div className='absolute w-full h-auto p-8 bottom-0 translate-x-[-20px] opacity-0 group-hover:translate-x-[0] group-hover:opacity-100 transtion-all duration-[0.8s] ease'>
              <h5 className='font-ballet text-[35px] tracking-[5px]'>Relationship</h5>
              <p className='text-[12px]'>Kembali di pertemukan dengan sangat-sangat tidak terduga di SMA sekolah dan Gereja yang sama kemudian kami mulai menjalin hubungan pada awal 2018</p>
            </div>
            <img src='/img/love2.jpg' />
          </div>
          <div className='relative group'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-[0.8s] ease'></div>
            <div className='absolute w-full h-auto p-8 bottom-0 translate-x-[-20px] opacity-0 group-hover:translate-x-[0] group-hover:opacity-100 transtion-all duration-[0.8s] ease'>
              <h5 className='font-ballet text-[35px] tracking-[5px]'>Engagement</h5>
              <p className='text-[12px]'>Akhirnya setelah 5-+ Tahun,tepatnya pada 30 Desember 2023 kamipun melangsungkan acara Lamaran sekaligus pertemuan kedua keluarga besar kami</p>
            </div>
            <img src='/img/love3.jpg' />
          </div>
        </div>
      </div>
    </section>
  );
}
