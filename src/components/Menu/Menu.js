import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'; 
import Button from './components/ButtonLink/ButtonLink';


function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo Pandolflix"/>
            </a>

            <Button className='ButtonLink'>
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;