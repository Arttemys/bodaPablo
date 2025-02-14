import Image from "next/image";
// @ts-expect-error TS2307: Cannot find module '@splidejs/react-splide' or its corresponding type declarations
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';


const fotos = [
  {
    src: '/foto1.jpeg',
    alt: 'dinner',
  },
  {
    src: '/foto2.jpeg',
    alt: 'disney',
  },
  {
    src: '/foto3.jpeg',
    alt: 'selfie',
  },
  {
    src: '/foto4.jpeg',
    alt: 'formal',
  },
  {
    src: '/foto5.jpeg',
    alt: 'runner',
  },
  {
    src: '/foto6.jpeg',
    alt: 'smile',
  },
];

export const CustomSlider = () => {
  return <Splide
    options={{
      type: 'slide',
      perPage: 3,
      perMove: 1,
      gap: '3rem',
      width: '100%',
      pagination: true,
      arrows: true,
      padding: '2rem',
      breakpoints: {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 1,          
        },
      }
    }}
  >
    {
      fotos.map((foto, index) => (
        <SplideSlide key={foto.src + index}>
          <Image
            alt={foto.alt}
            src={foto.src}
            width={300}
            height={300}
            style={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: '16px'
            }}
          />
        </SplideSlide>
      ))
    }
  </Splide >
}