import React from 'react'
import hand from "assets/waving-hand.svg"
import hero from "assets/Hero.svg"
import Projects from 'components/Projects/Projects'
import Habilities from 'components/Habilities/Habilities'
import Footer from 'components/Footer/Footer'
function Home() {
    return (
        <div className='w-11/12 flex flex-col justify-center'>
            <div id="hero" className="flex flex-row justify-center w-full mt-20 mb-20">
                <div className="text-center py-12 text-white">
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
                    <h1 className="text-tertiary text-3xl">
                        {"<>"}Analista Programador{"</>"}
                    </h1>
                </div>

                <div>
                    <img src={hero} className="w-80 max-w-[300px] ml-14" />
                </div>
            </div>
            <Projects/>
            <Habilities />
            <Footer />
        </div>

    )
}

export default Home