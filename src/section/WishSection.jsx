import RSVP from '../component/RSVP';

export default function WishSection() {
  const wishes = [
    {
      name: 'Merry Huisanny',
      message: 'Selamat berbahagia buat HIZKIA & LYSA Semoga Tuhan selalu memberkati kalian berdua,dalam membina rumah tangga yang baru🙏🙏🙏',
      image: '/img/blank.png'
    },
    {
      name: 'John Doe',
      message: 'Semoga pernikahan kalian langgeng dan penuh kebahagiaan!',
      image: '/img/blank.png'
    },
    {
      name: 'Jane Smith',
      message: 'Selamat menempuh hidup baru, semoga selalu diberkati dan berbahagia!',
      image: '/img/blank.png'
    },
    {
      name: 'Jane Smith',
      message: 'Selamat menempuh hidup baru, semoga selalu diberkati dan berbahagia!',
      image: '/img/blank.png'
    },
    {
      name: 'Jane Smith',
      message: 'Selamat menempuh hidup baru, semoga selalu diberkati dan berbahagia!',
      image: '/img/blank.png'
    }
  ];

  return (
    <section className='relative bg-wish py-8 md:py-4'>
      <div className='absolute inset-0 bg-white bg-opacity-75 z-[1]'></div>
      <div className='container z-[2] relative text-[#6a6a6a]'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-16 text-center items-center md:x-12'>
          <div className='flex flex-col  '>
            <h2 className='text-[55px] leading-none'>WEDDING WISH</h2>
            <p className='text-[15px] text-[#2e2e2e]'>Kirimkan Doa & Ucapan Kepada kedua Mempelai</p>
            <div className='border border-slate-400 custom-shadow2 rounded-md mt-4'>
              <form action='' className='p-4 flex flex-col gap-4  items-center'>
                <input type='text' name='namaWish' id='namaWish' placeholder='Nama' className='p-2 font-arial text-sm rounded border border-slate-400 w-full' />
                <textarea name='pesanWish' id='pesanWish' placeholder='Pesan' className='noresize p-2 font-arial text-sm rounded border border-slate-400 w-full'></textarea>
                <button className='text-[12px] font-arial py-1 px-6 rounded-full border border-slate-400 bg-white inline-flex text-center'>Kirimkan Ucapan</button>
              </form>
              <div className='mt-6 p-4 h-[270px] overflow-auto space-y-4'>
                {wishes.map((wish, index) => (
                  <div key={index} className=' flex items-start gap-2 '>
                    <img src={wish.image} className='size-[40px] aspect-square border border-white rounded-full' />
                    <div className='wish-item flex flex-col text-left text-[12px] font-roboto bg-white p-2 rounded w-full'>
                      <p className='text-[12px] font-roboto font-bold'>{wish.name}</p>
                      {wish.message}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='p-8 border-4 bg-white border-slate-700'>
              <img src='/img/join2.jpg' />
            </div>
            <RSVP />
          </div>
        </div>
      </div>
    </section>
  );
}
