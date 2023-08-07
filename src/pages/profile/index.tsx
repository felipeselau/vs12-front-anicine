import { Button } from "@mui/material";
import OsakaPath from "../../assets/osaka.jpg"

import './styles.css'
import Footer from "../../components/footer/Footer";


export default function Profile(){
    return(
        <div className="body">
            <h1>Seu Perfil:</h1>
            <div className="perfil-container">
                <div className="profile-picture">
                    <img src={OsakaPath} alt="Foto de perfil da personagem Osaka" />
                </div>
                <p><span>Nome de Usuário:</span> Pafúncio</p>
                <p><span>Email:</span> pafuncio123@email.com</p>
                <p><span>Animes Favoritados:</span> 10</p>
                <p><span>Animes Assistidos:</span> 0</p>

                <Button
                variant="contained"
                sx={{
                    width: "100%",
                    backgroundColor: "var(--accent)",
                    "&:hover":{
                        backgroundColor: "var(--accent-3)"
                    }
                    
                }}>Editar Perfil</Button>
            </div>
            <Footer />
        </div>
    )
}