import React, { useState } from 'react';
import Popup from '../Popup/Popup';

// Logos
import Chargefix from 'assets/Logos/chargeFix.svg';
import Academia from 'assets/Logos/AcademiaCedolin.svg';
import Game from 'assets/Logos/GameStore.svg';

// Iconos
import ReactJs from 'assets/Icon/ReactJs.svg' 
import TailwindCss from 'assets/Icon/TailwindCss.svg' 
import NodeJs from 'assets/Icon/NodeJs.svg' 
import MongoDB from 'assets/Icon/MongoDb.svg' 
import Firebase from 'assets/Icon/Firebase.svg' 
import GCP from 'assets/Icon/GCP.svg'
// Imagenes
import LandingPage from 'assets/Proyecto_1.png';
import PaymentsPage from 'assets/Proyecto_2.png';
import AcademiaCedolin from 'assets/Proyecto_3.png';
import GameStore from 'assets/Proyecto_4.svg';

const projectsData = [
    {
        id: 1,
        image: LandingPage,
        title: 'CHARGEFIX WEB (Finalizado)',
        icon: Chargefix,
        link: 'https://chargefix.com',
        startDate: 'Abril 2024',
        endDate: 'Mayo 2024',
        description:`El proyecto "CHARGEFIX WEB" desarrolló una landing page para ChargeFIX, empresa que ofrece estaciones de carga para dispositivos electrónicos en diversas ubicaciones. La página presenta los servicios de ChargeFIX, permite a los usuarios conocer las ubicaciones de las estaciones y destaca los beneficios de utilizar el servicio. El frontend se desarrolló con ReactJs, Vite y Tailwind CSS, mientras que el backend utilizó NodeJs y MongoDB. El proyecto se realizó entre Abril 2024 y Mayo de 2024, resultando en una plataforma web funcional que facilita el acceso a las soluciones de carga de ChargeFIX.`,
        repo: 'https://github.com/',
        frontEnd: [
            { image: ReactJs, title: "ReactJs"},
            { image: TailwindCss, title: "TailwindCss"},
            { image: NodeJs, title: "NodeJs"},
            { image: MongoDB, title: "MongoDB"}
        ],
        references: ""
    },
    {
        image: PaymentsPage,
        title: 'CHARGEFIX B2C (En Proceso)',
        icon: Chargefix,
        link: 'https://chargefix.com',
        description: '',
        repo: 'https://github.com/',
        frontEnd: [
            { image: ReactJs, title: "ReactJs"},
            { image: TailwindCss, title: "TailwindCss"},
            { image: NodeJs, title: "NodeJs"},
            { image: MongoDB, title: "MongoDB"}
        ],
        startDate: 'Julio 2021',
        endDate: 'Presente',
        references: ''
    },
    {
        image: AcademiaCedolin,
        title: 'ACADEMIA CEDOLIN (En Proceso)',
        icon: Academia,
        link: 'https://academia-cedolin.web.app',
        description: '',
        repo: 'https://github.com/',
        frontEnd: [
            { image: ReactJs, title: "ReactJs"},
            { image: TailwindCss, title: "TailwindCss"},
            { image: NodeJs, title: "NodeJs"},
            { image: Firebase, title: "Firebase"}
        ],
        startDate: 'Marzo 2022',
        endDate: 'Presente',
        references: ''
    },
    {
        image: GameStore,
        title: 'Game Store (En Licitación)',
        icon: Game,
        link: '#',
        repo: 'https://github.com/',
        description: '',
        frontEnd: [
            { image: ReactJs, title: "ReactJs"},
            { image: TailwindCss, title: "TailwindCss"},
            { image: NodeJs, title: "NodeJs"},
            { image: GCP, title: "GCP"}
        ],
        startDate: 'Octubre 2022',
        endDate: 'Presente',
        references: ''
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopup = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    return (
        <div id='Projects' className='flex flex-col items-center mb-16 text-white'>
            <div className='text-3xl mb-6 flex flex-col items-center'>
                PROYECTOS
                <h1 className='p-1 bg-fourth rounded-lg shadow-lg neon-effect text-center w-10/12' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {projectsData.map((project, index) => (
                    <div key={index} className='group perspective-1000' onClick={() => openPopup(project)}>
                        <div className='relative w-[400px] h-[200px] rounded-lg shadow-lg transform-style-3d transition-transform duration-700 group-hover:rotate-y-180'>
                            <div className='absolute inset-0 w-full h-full bg-gray-800 flex items-center justify-center rounded-lg backface-hidden'>
                                <img
                                    src={project.icon}
                                    alt={`${project.title} icon`}
                                    className='w-auto h-auto'
                                />
                            </div>
                            <div className='absolute inset-0 w-full h-full backface-hidden transform rotate-y-180'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full rounded-lg'
                                />
                            </div>
                        </div>
                        <h2 className='text-xl font-semibold mt-4 text-center'>{project.title}</h2>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <Popup project={selectedProject} onClose={closePopup} />
            )}
        </div>
    );
}

export default Projects;
