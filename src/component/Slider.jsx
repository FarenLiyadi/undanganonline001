import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Slider({ sliderData, perPage = 5, autoplay = true }) {
  return (
    <div className='overflow-x-hidden'>
      <Splide
        options={{
          perPage: perPage,
          perMove: 1,
          dragabble: true,
          rewind: true,
          gap: '0rem',
          autoplay: autoplay,
          type: 'loop',
          drag: 'free',
          snap: true,
          interval: 3000,
          arrows: false,
          pagination: false
        }}>
        {sliderData.map((item, index) => (
          <SplideSlide key={index}>
            <img src={`/img/${item}`} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
