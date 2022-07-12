import { useEffect, useRef, useState } from "react";
import  * as C from "./style";

import { 
    AiFillGithub, 
    AiFillLinkedin,
    AiOutlineFormatPainter
} from "react-icons/ai";

const Header = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
    const menuOptionRef = useRef<HTMLUListElement | null>(null);
    useEffect(()=>{
        if(mobileMenuActive){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuActive])
    
    const changeActiveMenuOption = (option: HTMLLIElement) => {
        if (menuOptionRef.current === null) return; 
        // percorre todos elementos do menu e desativa
        for(let op of menuOptionRef.current.children){
            op.classList.remove("selected");
        }
        // ativa o elemento que foi clicado
        option.classList.add("selected");
        setMobileMenuActive(false);
    }
    return(
        <C.Container>
            <C.MenuContent  className={mobileMenuActive ? "mobile-menu-active" : ""}>
                <C.Menu ref={menuOptionRef}>
                    <C.MenuOption 
                        onClick={(e) => changeActiveMenuOption(e.currentTarget)}
                    ><a href="#home">Inicio</a></C.MenuOption>
                    <C.MenuOption
                        onClick={(e) => changeActiveMenuOption(e.currentTarget)}
                    ><a href="#tech">Tecnologias</a></C.MenuOption>
                    <C.MenuOption
                        onClick={(e) => changeActiveMenuOption(e.currentTarget)}
                    ><a href="#projects">Projetos</a></C.MenuOption>
                    <C.MenuOption
                        onClick={(e) => changeActiveMenuOption(e.currentTarget)}
                    ><a href="#about">Sobre mim</a></C.MenuOption>
                    <C.MenuOption
                        onClick={(e) => changeActiveMenuOption(e.currentTarget)}
                    ><a href="#contact">Contato</a></C.MenuOption>
                </C.Menu>
                <C.SocialMedia>
                    <a href="https://www.linkedin.com/in/mayron-fernandes/" target="_blank">
                        <C.LinkedInIcon />
                    </a>
                    <a href="https://github.com/mayron1806" target="_blank">
                        <C.GitHubIcon />
                    </a>
                </C.SocialMedia>
            </C.MenuContent>
            <C.MenuToggle 
                active={mobileMenuActive}
                onClick={()=> setMobileMenuActive(active => !active)}
                className="toggle"
            />
        </C.Container>
    )
}
export default Header;