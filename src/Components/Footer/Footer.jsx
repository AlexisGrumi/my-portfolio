import React from 'react'
import LinkedIn from 'assets/Icon/LinkedIn.svg'
import Github from 'assets/Icon/GitHub.svg'
import Outlook from 'assets/Icon/Outlook.svg'

function Footer() {
    return (
        <div id='Contact' className='flex flex-col items-center mb-20 text-white'>
            <div className='text-3xl mb-12 flex flex-col items-center font-bold'>
                Contacto
            </div>
            <div className='flex gap-5'>
                <a className='cursor-pointer' onClick={() => { window.open("https://www.linkedin.com/in/alexis-grumi", "_self"); }}>
                    <img src={LinkedIn} />
                </a>
                <a className='cursor-pointer' onClick={() => { window.open("https://github.com/AlexisGrumi", "_self"); }}>
                    <img src={Github} />
                </a>
                <a href="mailto:al.grumi@duocuc.cl" >
                    <img src={Outlook} alt="Enviar correo" />
                </a>
            </div>
        </div>
    )
}

export default Footer