import { useState, useEffect } from 'react';
import Context from "../../Context";
import { NavbarContainer,SignatureLogo,ThemeButton,NavLinksContainer,NavLinkItem } from "../../StyledComponents";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate()
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const onClickHome=()=>{
        navigate('/',{replace:true})
        document.title = "Sanjay | Portfolio"

    }
    const onClickAbout=()=>{
        navigate('/about',{replace:true})
        document.title = "Sanjay | About"

    }
    const onClickProjects=()=>{
        navigate('/projects',{replace:true})
        document.title = "Sanjay | Projects"

    }
    const onClickContact=()=>{
        navigate('/contact',{replace:true})
        document.title = "Sanjay | Contact"

    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Context.Consumer>
            {value => {
                const { changeToDark, dark } = value;

                const onClickChangeTheme = () => {
                    changeToDark();
                };
                return (
                    <NavbarContainer $scrolled={scrolled} $dark={dark}>
                        <SignatureLogo onClick={onClickHome} $dark={dark}>Sanjay</SignatureLogo>
                        <NavLinksContainer>
                        <NavLinkItem onClick={onClickHome} $dark={dark} $active={pathname === '/'}>Home</NavLinkItem>
                        <NavLinkItem onClick={onClickAbout} $dark={dark} $active={pathname === '/about'}>About</NavLinkItem>
                        <NavLinkItem onClick={onClickProjects} $dark={dark} $active={pathname === '/projects'}>Projects</NavLinkItem>
                        <NavLinkItem onClick={onClickContact} $dark={dark} $active={pathname === '/contact'}>Contact</NavLinkItem>
                        </NavLinksContainer>
                        <ThemeButton 
                            type="button" 
                            onClick={onClickChangeTheme}
                            style={{ padding: '8px 16px', cursor: 'pointer' }}
                        >
                            {dark?<MdOutlineLightMode color='#ffffff' size={30}/>:<MdDarkMode size={30}/>}
                        </ThemeButton>
                        
                    </NavbarContainer>
                );
            }}
        </Context.Consumer>
    );
};

export default Navbar;