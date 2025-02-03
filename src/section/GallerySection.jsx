import { useState } from 'react';
import Snowflakes from '../component/Snowflakes';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = ['/img/gallery1.jpg', '/img/gallery2.jpg', '/img/gallery3.jpg', '/img/gallery4.jpg', '/img/gallery5.jpg', '/img/gallery6.jpg', '/img/gallery7.jpg', '/img/gallery8.jpg'];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section className='py-8 relative overflow-hidden'>
      <div className='bg-gallery'></div>
      <Snowflakes />
      <div className='absolute top-0 left-0 bg-black/75 w-full h-full z-[1]'></div>
      <h2 className='font-meath text-[55px] md:text-[150px] leading-none text-center mb-20 z-[2] relative text-white'>Our Gallery</h2>
      <div className='container-fluid columns-2 md:columns-3 gap-2 md:gap-0 z-[2] relative mx-4 md:mx-0'>
        {images.map((src, i) => (
          <div key={i} className='overflow-hidden group cursor-pointer' onClick={() => setIndex(i)}>
            <img src={src} className='w-full h-auto group-hover:scale-125 transition-all duration-500 ease group-hover:brightness-50' alt={`Gallery image ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className='container text-center mt-4 md:mt-0 '>
        <p className='font-roboto leading-none text-[11px] md:text-base  text-white z-[2] relative pt-2 mb-6'>
          <em>
            Kesan yang mendalam akan terukir dihati kami, <br />
            serta diiringi ucapan terima kasih yang tulus, <br />
            kepada Bapak/Ibu/Saudara/i berkenan hadir <br />
            untuk memberikan Doa Restu
          </em>
        </p>
      </div>

      <Lightbox slides={images.map((src) => ({ src }))} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </section>
  );
}
