import { Link } from "react-router-dom";
import { HouseSimple, MagnifyingGlass, UserCircle, SignOut } from "@phosphor-icons/react";

import "./style.css"
import PathLogo from "./logo.svg";


interface iNavProps{
    current: string;
}

export default function NavBar(props:iNavProps){


    return(
        <nav>
            <div className="logo">
                <img src={PathLogo} alt="" />
            </div>
            <div className="nav-links">
                <Link to={'/'} className="link">
                <HouseSimple  size={32}/>
                    Home
                </Link>
                <Link to={'/search'} className="link">
                    <MagnifyingGlass  size={32}/>
                    Pesquisar
                </Link>
                <Link to={'/profile'} className="link">
                    <UserCircle size={32} />
                    Perfil
                </Link>
                
            </div>
            <Link to={'/logout'} className="link bottom-link">
                <SignOut  size={32}/>
                Sair
            </Link>
            
        </nav>
    )
}       