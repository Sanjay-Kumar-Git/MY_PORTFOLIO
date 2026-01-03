import { MobileNav, NavItem } from "../../StyledComponents";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser, FiGrid, FiSend } from "react-icons/fi";
import Context from "../../Context";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";

const MobileNavBar = () => {
  const { pathname } = useLocation();
  const { dark } = useContext(Context);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const onClickKnowMore = () => {
    navigate("/about", { replace: true });
    document.title = "Sanjay | About";
  };
  const onClickProjects = () => {
    navigate("/projects", { replace: true });
    document.title = "Sanjay | Projects";
  };
  const onClickContact = () => {
    navigate("/contact", { replace: true });
    document.title = "Sanjay | Contact";
  };
  const onClickHome = () => {
    navigate("/", { replace: true });
    document.title = "Sanjay | Portfolio";
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        
        setIsScrollingDown(true);
      } else {
        
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <MobileNav $dark={dark} $isScrollingDown={isScrollingDown}>
      <NavItem onClick={onClickHome} $dark={dark} $active={pathname === "/"}>
        <AiOutlineHome />
        <span>Home</span>
      </NavItem>

      <NavItem
        onClick={onClickKnowMore}
        $dark={dark}
        $active={pathname === "/about"}
      >
        <FiUser />
        <span>About</span>
      </NavItem>

      <NavItem
        onClick={onClickProjects}
        $dark={dark}
        $active={pathname === "/projects"}
      >
        <FiGrid />
        <span>Projects</span>
      </NavItem>

      <NavItem
        onClick={onClickContact}
        $dark={dark}
        $active={pathname === "/contact"}
      >
        <FiSend />
        <span>Contact</span>
      </NavItem>
    </MobileNav>
  );
};

export default MobileNavBar;
