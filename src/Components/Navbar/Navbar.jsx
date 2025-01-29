import React, { useState } from "react";

function Navbar() {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const markSelected = (index, event) => {
        if (event) {
            event.preventDefault();
        }
        setSelected(index);
        setIsOpen(false); // Cierra el menú al seleccionar un enlace
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="text-white w-full flex flex-col justify-end p-5 z-50 lg:bg-transparent absolute right-0 top-0">
            {/* Botón hamburguesa */}
            <div
                className="lg:hidden flex flex-col items-end gap-1 cursor-pointer z-50 relative"
                onClick={toggleMenu}
            >
                <span
                    className={`h-1 w-6 bg-white rounded transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                    className={`h-1 w-6 bg-white rounded transition-opacity duration-300 ease-in-out ${
                        isOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`h-1 w-6 bg-white rounded transition-transform duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
            </div>

            {/* Menú */}
            <ul
                className={`fixed top-0 right-0 h-16 w-full flex items-center justify-end gap-6 px-5 transition-all duration-500 ease-in-out mr-12 ${
                    isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                } lg:static lg:translate-x-0 lg:opacity-100 lg:flex-row lg:gap-8 lg:items-center lg:bg-transparent`}
                style={{
                    transitionProperty: "transform, opacity", // Transición para opacidad y movimiento
                }}
            >
                <li
                    onClick={(e) => markSelected(0, e)}
                    className={`px-4 py-1 rounded-full hover:bg-secondary cursor-pointer border text-xs  lg:text-base ${
                        selected === 0 ? "bg-secondary" : ""
                    }`}
                >
                    <a href="#hero">Inicio</a>
                </li>
                <li
                    onClick={(e) => markSelected(1, e)}
                    className={`px-4 py-1 rounded-full hover:bg-secondary cursor-pointer border text-xs  lg:text-base ${
                        selected === 1 ? "bg-secondary" : ""
                    }`}
                >
                    <a href="#Projects">Proyectos</a>
                </li>
                <li
                    onClick={(e) => markSelected(2, e)}
                    className={`px-4 py-1 rounded-full hover:bg-secondary cursor-pointer border text-xs  lg:text-base ${
                        selected === 2 ? "bg-secondary" : ""
                    }`}
                >
                    <a href="#Hablities">Habilidades</a>
                </li>
                <li
                    onClick={(e) => markSelected(3, e)}
                    className={`px-4  py-1 rounded-full hover:bg-secondary cursor-pointer border text-xs  lg:text-base ${
                        selected === 3 ? "bg-secondary" : ""
                    }`}
                >
                    <a href="#Contact">Contacto</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
