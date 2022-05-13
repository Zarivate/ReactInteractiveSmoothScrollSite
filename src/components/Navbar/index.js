import React, {useState, useEffect} from 'react';
// Use state is for making it so when you scroll the Navbar changes color so it doesn't blend in
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  // If the screen passes 80 pixels the color of the Navbar changes, else it doesn't
  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

    // Function to make it so when they click on the Logo on the Navbar it takes them back to top
    const toggleHome = () => {
      scroll.scrollToTop();
    };

    return (
     <>
     <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              Turtle
              </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />  
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks 
                to='about'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                  About
                </NavLinks>  
              </NavItem>
              <NavItem>
                <NavLinks to='discover'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                  Discover
                </NavLinks>  
              </NavItem>
              <NavItem>
                <NavLinks to='services'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                  Services
                </NavLinks>  
              </NavItem>
              <NavItem>
                <NavLinks to='signup'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                  Sign Up
                </NavLinks>  
              </NavItem>  
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>    
          </NavbarContainer> 
        </Nav>
      </IconContext.Provider>   
     </>
    );
};

export default Navbar;
