import { Button } from "@mui/material";

import './styles.css';
import Footer from "../../components/footer/Footer";


export default function LogOut(){
    return (
        <div className="body">
            <div className="logout-container">

            <h1>Tem certeza que deseja sair?</h1>
            <h3>Ao sair da sua conta, você não ira conseguir favoritar filmes e nem gerenciar seus favoritos</h3>
            <div className="buttons">
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'var(--accent)',
                        "&:hover":{
                            backgroundColor: "var(--accent-3)"
                        }
                    }}
                    >
                    Continuar na sua conta
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "var(--black-3)",
                        border: '1px solid var(--accent)',
                        "&:hover":{
                            backgroundColor: 'var(--black-disabled)',
                            
                        }
                    }}
                    >
                    Sair da conta
                </Button>
            </div>
            </div>
            <Footer />
        </div>
    )
}