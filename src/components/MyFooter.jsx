import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/logo.png';

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-1'><img src={logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]'>DigiProCP</span></a>
            <div>
              <p className='mb-1 text-gray-500'>Contacta con nosotros para hacer realidad tu proyecto digital.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Nosotros" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Contactanos</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Síguenos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Politica de privacidad</Footer.Link>
                <Footer.Link href="#">Condiciones de servicio</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div>
              <p className='mb-1 text-gray-500'>Copyright © 2023 DigiProCP | All rights reserved</p>
            </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter