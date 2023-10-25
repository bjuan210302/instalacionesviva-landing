import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
    Nav,
    NavBtnLink,
    NavIcon,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavLogo,
    NavMenu,
    NavbarContainer
} from './Navbar.elements';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);

    // eslint-disable-next-line
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    // const handleProductsClick = () => {
    //     setHomeClick(false);
    //     setProductsClick(true);
    //     setServicesClick(false);
    // }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        <NavIcon />
                            Instalaciones Viva
                    </NavLogo>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Inicio
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='#services' onClick={closeMobileMenu}>
                                Servicios
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn onClick={() => scrollTo('contacto')}>
                            {button ? (
                                <NavBtnLink to='#contacto'>
                                    <Button primary>CONTÁCTANOS</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='#contacto'>
                                    <Button onClick={closeMobileMenu} fontBig primary>CONTÁCTANOS</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
