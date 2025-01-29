import React, { useState } from 'react';

// Logos
import Docker from 'assets/Icon/Docker.svg';
import ReactJs from 'assets/Icon/ReactJs.svg';
import JS from 'assets/Icon/Js.svg';
import TS from 'assets/Icon/Ts.svg';
import PHP from 'assets/Icon/PHP8.svg'
import Angular from 'assets/Icon/Angular.svg';
import Ja from 'assets/Icon/Java.svg'
import Py from 'assets/Icon/Python.svg'
import NodeJs from 'assets/Icon/NodeJs.svg';
import HTML from 'assets/Icon/HTML.svg';
import CSS from 'assets/Icon/CSS.svg';
import TailwindCss from 'assets/Icon/TailwindCss.svg';
import Figma from 'assets/Icon/Figma.svg';
import GitHub from 'assets/Icon/GitHub.svg';
import Git from 'assets/Icon/Git.svg';
import MongoDB from 'assets/Icon/MongoDB.svg';
import GCP from 'assets/Icon/GCP.svg';
import Firebase from 'assets/Icon/Firebase.svg';

// Certificados
import { Css, ReactCert, JavaScript, PHP8, Python, Java } from 'certs/CertsExport';
import { Document } from 'react-pdf';

function Habilities() {
  const [selectedCert, setSelectedCert] = useState(null);

  const projectsData = [
    {
      image: ReactJs,
      title: 'ReactJs',
      cert: ReactCert,
    },
    {
      image: JS,
      title: 'JavaScript',
      cert: JavaScript,
    },
    {
      image: Angular,
      title: 'Angular',
      cert: '',
    },
    {
      image: TS,
      title: 'TypeScript',
      cert: '',
    },
    {
      image: PHP,
      title: 'PHP8',
      cert: PHP8,
    },
    {
      image: HTML,
      title: 'HTML',
      cert: '',
    },
    {
      image: CSS,
      title: 'CSS',
      cert: Css,
    },
    {
      image: TailwindCss,
      title: 'TailwindCss',
      cert: '',
    },
    {
      image: Ja,
      title: 'Java',
      cert: Java
    },
    {
      image: Py,
      title: 'Python',
      cert: Python
    },
    {
      image: NodeJs,
      title: 'NodeJs',
      cert: '',
    },
    {
      image: MongoDB,
      title: 'MongoDB',
      cert: '',
    },
    {
      image: GCP,
      title: 'GCP',
      cert: '',
    },
    {
      image: Firebase,
      title: 'Firebase',
      cert: '',
    },
    {
      image: GitHub,
      title: 'GitHub',
      cert: '',
    },
    {
      image: Git,
      title: 'Git',
      cert: '',
    },
    {
      image: Docker,
      title: 'Docker',
      cert: '',
    },
    {
      image: Figma,
      title: 'Figma',
      cert: '',
    },
  ];

  return (
    <div id="Habilities" className="flex flex-col items-center mb-20 text-white">
      <div className="text-3xl mb-12 flex flex-col items-center font-bold">
        Habilidades
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-2">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group m-2 flex flex-row items-center p-2 border border-[#FFFFFF] rounded-lg overflow-hidden relative cursor-pointer"
            onClick={() => setSelectedCert(project.cert)}
          >
            {/* Imagen inicial */}
            <img
              src={project.image}
              className="w-full mr-2 max-w-[40px] flex justify-self-start transition-transform duration-500 group-hover:rotate-x-180"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Título del proyecto */}
            <h2 className="text-sm text-nowrap font-semibold">{project.title}</h2>

            {/* Contenedor de hover */}
            <div className="absolute inset-0 bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.cert ? 'Ver Certificado' : 'Sin Certificado'}
            </div>
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

export default Habilities;
