import React from 'react';
import GitHub from 'assets/Icon/GitHub.svg';
import WWW from 'assets/Icon/WWW.svg';

function Popup({ project, onClose }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-fifth text-white p-6 rounded-lg shadow-lg w-[700px] h-fit flex flex-col items-center relative'>

                <button onClick={onClose} className='absolute top-4 right-4 text-white'>
                    X
                </button>

                <img src={project.image} alt={project.title} className='w-[400px] h-[200px] rounded-lg mb-6' />
                <h2 className='text-xl font-semibold mb-4'>{project.title}</h2>
                <p className='mb-8 text-justify'>{project.description}</p>

                <div className='mb-8 w-11/12 text-left'>
                    <h3 className='text-lg font-semibold mb-4'>Tecnologías o Frameworks</h3>
                    <div className='grid grid-cols-4 justify-items-center mx-auto'>
                        {project.frontEnd.map((tech, index) => (
                            <div key={index} className='flex flex-col items-center justify-center'>
                                <img src={tech.image} alt={tech.title} className='w-16 h-16 object-contain mb-2' />
                                <span className='text-sm'>{tech.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mb-4'>
                    <p><strong>Número de referencias:</strong> {project.references}</p>
                </div>

                <div className='flex gap-4'>
                    <button className='bg-[#161B22] text-white px-4 rounded-lg flex flex-row items-center' onClick={() => window.open(project.repo, '_blank')}>
                        <img src={GitHub} className='w-12' /> Ver Repositorio
                    </button>
                    <button className='bg-[#161B22] text-white px-4 rounded-lg flex flex-row items-center' onClick={() => window.open(project.link, '_blank')}>
                        <img src={WWW} className='w-8 mr-2' />Visitar Página
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
