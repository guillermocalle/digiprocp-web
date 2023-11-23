import React from 'react';
import aboutImg from '../assets/mobilelogin.png';
import Maecenas from '../assets/maecenas.png';

const Products = () => {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Diseñamos el futuro digital de tu negocio</h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi ullam, amet blanditiis beatae aspernatur odit eos rerum et facilis. Harum id porro deleniti laborum sapiente voluptatibus quia aut non numquam, soluta neque atque maxime illo odio aspernatur expedita eos.</p>
            <button className='btn-primary'>Mas info.</button>
          </div>
        </div>
      </div>


      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/3'>
            <img src={Maecenas} alt="" />
          </div>
          
          <div className='md:w-2/3 mx-auto'>
            <div>
              <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro nostrum tenetur quidem excepturi corporis adipisci eos culpa laboriosam delectus tempore in et, a minus at deserunt, consequuntur magni aspernatur commodi aperiam saepe! In facilis quos nesciunt nihil tempora dolores quisquam, ratione minus animi. Non iure voluptate illo possimus voluptatem, doloribus reprehenderit, a beatae dolor rerum tenetur quibusdam ex ullam.</p>
              <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Pedro N.</h5>
              <p className='text-base text-neutralGrey mb-8'>Socio en Agencia Nacional</p>
              <div>
                <div className='flex items-center gap-8 flex-wrap'>
                  <img src="/src/assets/company1.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/company2.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/company3.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/company4.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/company5.png" alt="" className='cursor-pointer' />
                  <img src="/src/assets/company6.png" alt="" className='cursor-pointer' />
                  <div className='flex items-center gap-8'>
                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Conozca a todos los clientes{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className='inline-block ml-2'
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#706FE5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products