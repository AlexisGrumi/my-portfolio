import React, { useState } from 'react';

function Navbar() {
    const [selected, setSelected] = useState(null);

    const markSelected = (index) => {
        setSelected(index);
    };

    return (
        <nav className="text-white w-full flex justify-end text-base py-4">
            <ul className="flex flex-row gap-8 items-center">
                <li
                    onClick={() => markSelected(0)}
                    className={`px-5 py-1 rounded-full hover:bg-secondary cursor-pointer ${selected === 0 ? "bg-secondary " : ""}`}
                >
                    <a href='#hero'>
                        Inicio
                    </a>

                </li>
                <li
                    onClick={() => markSelected(1)}
                    className={`px-5 py-1 rounded-full hover:bg-secondary cursor-pointer ${selected === 1 ? "bg-secondary rounded-full" : ""}`}
                >
                    <a href='#Projects'>
                        Proyectos
                    </a>
                </li>
                <li
                    onClick={() => markSelected(2)}
                    className={`px-5 py-1 rounded-full hover:bg-secondary cursor-pointer ${selected === 2 ? "bg-secondary rounded-full" : ""}`}
                >
                    <a href='#Hablities'>
                        Habilidades
                    </a>
                </li>
                <li
                    onClick={() => markSelected(3)}
                    className={`px-5 py-1 rounded-full hover:bg-secondary cursor-pointer ${selected === 3 ? "bg-secondary rounded-full" : ""}`}
                >
                    <a href='#Contact'>
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
