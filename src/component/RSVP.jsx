import { useState } from 'react';

export default function RSVP() {
  const [nama, setNama] = useState('');
  const [pax, setPax] = useState('');
  const [konfirmasi, setKonfirmasi] = useState('');

  const generateWhatsAppLink = () => {
    const phoneNumber = '62895415126214';
    const baseUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    let text = `Hai,%20saya%20${encodeURIComponent(nama)}%20ingin%20konfirmasi%20kehadiran%20pada%20undangan%20pernikahan%20digital%20bahwa%20`;

    if (konfirmasi === 'Iya, Saya akan Hadir') {
      text += `Iya,%20Saya%20akan%20Hadir%20bersama%20${encodeURIComponent(pax)}%20orang.%20`;
    } else if (konfirmasi === 'Maaf, Saya Tidak Bisa Hadir') {
      text += `Maaf,%20Saya%20Tidak%20Bisa%20Hadir.%20`;
    }

    text += `Terima%20kasih%20ya.`;

    return `${baseUrl}&text=${text}`;
  };

  return (
    <div className=' transform transition-all duration-500 ease-in-out '>
      <h2 className='text-[90px] md:text-[55px] text-[#6a6a6a] text-center'>RSVP</h2>
      <p className=' text-[12px] text-center leading-none text-[#2e2e2e]'>
        Merupakan suatu kehormatan dan kebahagiaan bagi <br />
        kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir <br />
        untuk memberikan doa restu kepada kedua mempelai <br />
        atas kehadiran serta doa restu, kami ucapkan terimakasih <br />
      </p>
      <div className='p-4 mt-4 border-slate-300 border rounded-[12px]  flex flex-col gap-2 custom-shadow3'>
        <input type='text' name='nama' id='nama' placeholder='Nama' className='font-roboto text-[12px] p-2 text-[#333333]' value={nama} onChange={(e) => setNama(e.target.value)} />
        <input type='text' name='pax' id='pax' placeholder='1-5 Pax' className='font-roboto text-[12px] p-2' value={pax} onChange={(e) => setPax(e.target.value)} />
        <div className='flex flex-col text-left'>
          <p className='font-roboto text-[12px]'>Konfirmasi</p>
          <div className='flex items-center gap-2'>
            <input type='radio' name='confirm' id='confirm-hadir' value='Iya, Saya akan Hadir' checked={konfirmasi === 'Iya, Saya akan Hadir'} onChange={(e) => setKonfirmasi(e.target.value)} />
            <label htmlFor='confirm-hadir' className='text-[12px] font-roboto'>
              Iya, Saya akan Hadir
            </label>
          </div>
          <div className='flex items-center gap-2'>
            <input type='radio' name='confirm' id='confirm-tidakhadir' value='Maaf, Saya Tidak Bisa Hadir' checked={konfirmasi === 'Maaf, Saya Tidak Bisa Hadir'} onChange={(e) => setKonfirmasi(e.target.value)} />
            <label htmlFor='confirm-tidakhadir' className='text-[12px] font-roboto'>
              Maaf, Saya Tidak Bisa Hadir
            </label>
          </div>
          <a href={generateWhatsAppLink()} className='bg-white border border-slate-400 text-[12px] font-roboto  text-center rounded-full mt-4' target='_blank' rel='noopener noreferrer'>
            Reservasi via Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}
