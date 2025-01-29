import React, { useEffect, useState } from 'react';
import GitHub from 'assets/Icon/GitHub.svg';
import WWW from 'assets/Icon/WWW.svg';
import { IoCloseOutline } from "react-icons/io5";

function Popup({ project, onClose }) {
    const [validateWeb, setValidateWeb] = useState(false)
    const [validateRepo, setValidateRepo] = useState(false)

    useEffect(() => {
        const repolink = project.repo
        const weblink = project.link
        if (repolink) {
            setValidateWeb(true)
        }
        if (weblink) {
            setValidateRepo(true)
        }
    }, [])

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full h-full'>
            <div id='popup' className='text-white rounded-lg shadow-lg w-[700px] h-fit max-h-[90%] lg:max-h-fit flex flex-col items-center relative'>

                <button onClick={onClose} className='absolute top-4 right-4 text-white'>
                    <IoCloseOutline className='w-6 h-auto' />
                </button>
                <div className='flex flex-col mt-9 mb-8 px-12 items-center overflow-y-auto overflow-x-clip max-h-[80vh]'>
                    <h2 className='text-xl font-semibold mb-4 text-center w-full mt-2'>{project.title}</h2>
                    <img src={project.image} alt={project.title} className='w-11/12 h-auto max-w-[480px] rounded-lg mb-6' />
                    <h1 className='text-lg font-semibold mb-4 text-left w-11/12'>Descripción</h1>
                    <p className='text-justify w-11/12'>{project.description}</p>

                    <div className='w-11/12 h-[1px] mx-9 border-t border-white my-6' />

                    <div className='w-11/12 text-left'>
                        <h3 className='text-lg font-semibold mb-4'>Tecnologías o Frameworks</h3>
                        <div className='grid grid-cols-4 justify-items-center w-full'>
                            {project.frontEnd.map((tech, index) => (
                                <div key={index} className='flex flex-col items-center justify-center'>
                                    <img src={tech.image} alt={tech.title} className='w-16 h-16 object-contain' />
                                    <span className='text-sm'>{tech.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-11/12 h-[1px] mx-9 border-t border-white my-6' />

                    <div className='mb-4 w-full text-left'>
                        <p><strong>Referencias:</strong> {project.references}</p>
                    </div>

                    <div className='flex gap-4 w-11/12 '>
                        <button className='bg-[#161B22] text-white px-4 rounded-lg flex flex-row items-center justify-center w-6/12' onClick={() => window.open(project.repo, '_blank')}>
                            <img src={GitHub} className='w-10 mr-2' /> {validateRepo ? 'Ver Repositorio' : 'No disponible'}
                        </button>
                        <button className='bg-[#161B22] text-white px-4 rounded-lg flex flex-row items-center justify-center w-6/12' onClick={() => window.open(project.link, '_blank')}>
                            <img src={WWW} className='w-12 mr-2' />{validateWeb ? 'Visitar Pagina' : 'No disponible'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
