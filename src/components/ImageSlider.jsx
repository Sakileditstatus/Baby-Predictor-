import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSliderContext } from '../context/SliderContext';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    url: 'https://game1.example.com',
    title: 'Prediction Game 1'
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    url: 'https://game2.example.com',
    title: 'Prediction Game 2'
  },
  // Add more slides as needed
];

const ImageSlider = () => {
  const { setSelectedSlide } = useSliderContext();

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
    alert('Selected: ' + slide.title);
  };

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} onClick={() => handleSlideClick(slide)}>
          <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;