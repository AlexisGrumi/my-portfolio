import React from 'react'
import LinkedIn from 'assets/Icon/LinkedIn.svg'
import Github from 'assets/Icon/GitHub.svg'
import Outlook from 'assets/Icon/Outlook.svg'
function Footer() {
    return (
        <div id='Hablities' className='flex flex-col items-center mb-20 text-white'>
            <div className='text-3xl mb-6 flex flex-col items-center'>
                CONTACTO
                <h1 className='p-1 bg-fourth rounded-lg shadow-lg neon-effect text-center w-10/12' />
            </div>
            <div className='flex gap-5'>
                <a href="">
                    <img src={LinkedIn} />
                </a>
                <a href="">
                    <img src={Github} />
                </a>
                <a href="">
                    <img src={Outlook} />
                </a>
            </div>
        </div>
    )
}

export default Footer