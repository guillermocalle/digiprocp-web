import { Carousel } from 'flowbite-react';
import React from 'react';
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>

            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lleva tu negocio con nosotros al <span className='text-brandPrimary leading-snug'>siguiente nivel</span></h1>
              <p className='text-neutralGrey text-base mb-8'>Construimos puentes digitales: Tu camino hacia la visibilidad y el éxito.</p>
              <button className='btn-primary'>Registrese</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>

            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lleva tu negocio con nosotros al <span className='text-brandPrimary leading-snug'>siguiente nivel</span></h1>
              <p className='text-neutralGrey text-base mb-8'>Construimos puentes digitales: Tu camino hacia la visibilidad y el éxito.</p>
              <button className='btn-primary'>Registrese</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>

            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lleva tu negocio con nosotros al <span className='text-brandPrimary leading-snug'>siguiente nivel</span></h1>
              <p className='text-neutralGrey text-base mb-8'>Construimos puentes digitales: Tu camino hacia la visibilidad y el éxito.</p>
              <button className='btn-primary'>Registrese</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home