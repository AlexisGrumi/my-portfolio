import React, { useState } from 'react';

// Logos
import CumbreCondores from 'assets/Logos/LogoCumbre.png';

// Titulos
import AnalistaProgramador from 'titulos/CertificadoTitulo.pdf'
import TecnicoTelecomunicaciones from 'titulos/TituloTelecomunicaciones.pdf'
import { Document } from 'react-pdf';

function Graduation() {
  const [selectedCert, setSelectedCert] = useState(null);

  const projectsData = [
    
    {
        image: CumbreCondores,
        title: 'Titulado de Tecnico en Telecomunicaciones',
        cert: TecnicoTelecomunicaciones
    },
    {
      image: 'https://www.duoc.cl/wp-content/themes/wordpress-duoc-cl/images/logo-duoc.svg',
      title: 'Titulado de Analista Programador',
      cert: AnalistaProgramador,
    }
  ];

  return (
    <div id="Habilities" className="flex flex-col items-center mb-20 text-white">
      <div className="text-3xl mb-12 flex flex-col items-center font-bold">
        Titulos
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {projectsData.map((project, index) => (
                    <div key={index} className='group perspective-1000' onClick={() => setSelectedCert(project.cert)}>
                        <div className='relative w-[400px] h-[200px] rounded-lg shadow-lg'>
                            <div className='absolute inset-0 w-full h-full bg-tertiary flex items-center justify-center rounded-lg backface-hidden'>
                                <img
                                    src={project.image}
                                    alt={`${project.title} icon`}
                                    className='w-[50%] h-auto'
                                />
                            </div>
                            {/* <div className='absolute inset-0 w-full h-full backface-hidden transform rotate-y-180'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full rounded-lg'
                                />
                            </div> */}
                        </div>
                        <h2 className='text-xl font-semibold mt-4 text-center'>{project.title}</h2>
                    </div>
                ))}
            </div>

      {/* Contenedor del visor de PDF */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-11/12 h-5/6 bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-md z-50"
            >
              Cerrar
            </button>
            <iframe
              src={selectedCert}
              className="w-full h-full"
              title="Certificado"
              frameBorder="0"
            >
              <Document file={selectedCert}/>
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Graduation;
