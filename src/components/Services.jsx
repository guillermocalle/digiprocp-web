import React from 'react';

const Services = () => {

  const services = [
    { id: 1, title: "Marketing Digital Integral", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed incidunt recusandae eaque veritatis, cumque similique", image: "/src/assets/icons/memberss.png" },
    { id: 2, title: "Diseño Grafico", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed incidunt recusandae eaque veritatis, cumque similique", image: "/src/assets/icons/associationss.png" },
    { id: 3, title: "Consultoria Estrategica", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed incidunt recusandae eaque veritatis, cumque similique", image: "/src/assets/icons/club.png" },
  ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Nuestros Clientes</h2>
        <p className='text-neutralGrey'>Nuestra reputacion se construye en la satisfaccion de nuestros clientes...</p>

        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
          <img src="/src/assets/company1.png" alt="" />
          <img src="/src/assets/company2.png" alt="" />
          <img src="/src/assets/company3.png" alt="" />
          <img src="/src/assets/company4.png" alt="" />
          <img src="/src/assets/company5.png" alt="" />
          <img src="/src/assets/company6.png" alt="" />
          <img src="/src/assets/company7.png" alt="" />

        </div>
      </div>

      {/* services card */}
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Nuestros servicios harán que tu idea sea una completa innovacion digital</h2>
        <p>Conoce más de nuestros servicios profesionales</p>
      </div>

      {/* cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
          services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
            <div>
              <div className='bg-[#EAEAFC] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='-ml-5' /></div>
              <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
              <p className='text-sm text-neutralGrey'>{service.description}</p>
            </div>
          </div>)
        }
      </div>
      
    </div>
  )
}

export default Services