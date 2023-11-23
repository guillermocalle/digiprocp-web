import React from 'react';
import aboutImg from '../assets/about1.png';

const About = () => {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Equipo dedicado a potenciar tu visibilidad en línea</h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatibus atque officia, qui in modi, consequuntur molestiae ducimus nulla optio vero reiciendis, assumenda odio hic numquam sunt quam quae perspiciatis.</p>
            <button className='btn-primary'>Mas info.</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Construyendo conexiones significativas <br></br><span className='text-brandPrimary'>en el mundo digital</span></h2>
            <p>Nuestros logros son fruto de nuestro servicio profesional</p>
          </div>
           
          {/* stats */}
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/client.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>200+</h4>
                  <p>Clientes</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/events.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>100+</h4>
                  <p>Eventos</p>
                </div>
              </div>
            </div>

            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/club.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>150</h4>
                  <p>Equipo</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/memberss.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>300,000</h4>
                  <p>Miembros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About