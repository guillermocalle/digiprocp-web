import React from 'react';

const Blog = () => {

  const blogs = [
    { id: 1, title: "Cómo Construir una Marca Sólida en el Mundo Digital", image: "/src/assets/blog1.png" },
    { id: 2, title: "El Poder de las Redes Sociales: Estrategias que Transforman Seguidores en Clientes", image: "/src/assets/blog2.png" },
    { id: 3, title: "La Importancia del Marketing de Contenidos en un Mundo Digitalizado", image: "/src/assets/blog3.png" },
  ];

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Nuestro Blog</h2>
        <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
          Sumergete en el fascinante mundo del marketing digital con nuestro blog. Descubre las últimas tendencias, estrategias innovadoras y noticias relevantes que están transformando el mundo digital. Unete a la comunidad para conocer de cerca como ayudamos a empresas a optimizar su presencia en linea y alcanzar el éxito digital.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
          blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
            <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
              <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                <div className='flex items-center justify-center gap-8'>
                  <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Leer mas
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
          </div>)
        }
      </div>
    </div>
  )
}

export default Blog