import { useState } from 'react';
import WeddingGiftModal from '../component/WeddingGiftModal';
import ConfirmGiftModal from '../component/ConfirmGiftModal';

export default function GiftSection() {
  const [isGiftModalOpen, setisGiftModalOpen] = useState(false);
  const [isConfirmModalOpen, setisConfirmModalOpen] = useState(false);

  const openGiftModal = () => setisGiftModalOpen(true);
  const closeGiftModal = () => {
    const modalElement = document.querySelector('.right-0');
    if (modalElement) {
      modalElement.classList.add('translate-x-[500%]');
      setTimeout(() => setisGiftModalOpen(false), 500);
    }
  };
  const openConfirmModal = () => setisConfirmModalOpen(true);
  const closeConfirmModal = () => {
    const modalElement = document.querySelector('.right-0');
    if (modalElement) {
      modalElement.classList.add('-right-full');
      setTimeout(() => setisConfirmModalOpen(false), 300);
    }
  };
  return (
    <>
      <WeddingGiftModal isOpen={isGiftModalOpen} onClose={closeGiftModal} />
      <ConfirmGiftModal isOpen={isConfirmModalOpen} onClose={closeConfirmModal} />
      <section className='py-20 text-white bg-[#333333]'>
        <div className='container '>
          <div className='flex flex-col text-center'>
            <h2 className='text-[50px] md:text-[76px]'>Wedding Gift</h2>
            <div className='mt-4 p-4 bg-gradient-to-b from-[#333333] to-[#3d3d3d] w-full md:w-2/5 rounded-[50px] mx-auto shadow-2xl border border-slate-300'>
              <i className='ri-gift-fill text-[150px] md:text-[200px] leading-none'></i>
              <p className='font-arial text-[11px] md:text-[15px]'>
                <em>
                  Bagi yang ingin memberikan tanda kasih, <br />
                  dapat mengirimkan melalui fitur di bawah ini:
                </em>
              </p>
              <button className='px-4 rounded-full my-6 bg-[#3d3d3d] text-[12px] md:text-[15px] font-arial drop-shadow-lg inline-flex tracking-wider md:tracking-normal' onClick={openGiftModal}>
                Kirim Hadiah
              </button>
              <p className='font-arial text-[11px] md:text-[15px]'>
                <em>
                  <u>Silakan melakukan konfirmasi kirim hadiah.</u>
                </em>
              </p>
              <button className='font-arial text-[15px]' onClick={openConfirmModal}>
                <u>
                  <em>klik disini</em>
                </u>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
