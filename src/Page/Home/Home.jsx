import React from 'react'
import hand from "assets/waving-hand.svg"
import hero from "assets/Hero.svg"
import Projects from 'components/Projects/Projects'
import Habilities from 'components/Habilities/Habilities'
import Footer from 'components/Footer/Footer'
import Graduation from '../../Components/Graduation/Graduation'
function Home() {
    return (
        <div className='w-11/12 flex flex-col justify-center items-center mt-24'>
            <div id="hero" className="flex flex-row justify-center w-full mb-12 items-center">
                <div className="text-center py-12 text-white lg:mr-32">
                    <h1 className="text-xl flex items-center justify-center">
                        <img
                            src={hand}
                            alt="icono"
                            className="mr-2 transform animate-wave"
                        />
                        Hola, soy
                    </h1>
                    <h1 className="text-5xl font-semibold">
                        Alexis Grumi
                    </h1>
                    <h1 className="text-medium text-3xl p-3 border rounded-full mt-2">
                        {"<>"}Desarrollador Fullstack{"</>"}
                    </h1>
                    <div className="text-center max-w-[500px] mx-auto mt-4">
                    Hola, soy Alexis Grumi, tengo 25 años y soy Full Stack Developer con experiencia en desarrollo de interfaces, integración de APIs y optimización de rendimiento. Apasionado por la tecnología, cuento con habilidades blandas como trabajo en equipo, proactividad y comunicación efectiva. Me interesan la literatura de ciencia ficción, las artes marciales y la fotografía. Actualmente, soy titulado de Analista Programador en DuocUC y continúo mi formación en Ingeniería Informática. Poseo certificaciones en Desarrollo de Software, Análisis de Requerimientos y Calidad de Software.
                    </div>
                </div>
                <div>
                    <img src={hero} className="w-80 max-w-[300px] ml-14 lg:block hidden" />
                </div>
            </div>
            <div className='w-11/12 h-[1px] mx-9 border-t border-white mt-16 mb-28' />
            <Graduation/>
            <div className='w-11/12 h-[1px] mx-9 border-t border-white mt-16 mb-28' />
            <Projects />
            <div className='w-11/12 h-[1px] mx-9 border-t border-white mt-16 mb-28' />
            <Habilities />
            <div className='w-11/12 h-[1px] mx-9 border-t border-white mt-16 mb-28' />
            <Footer />
        </div>

    )
}

export default Home