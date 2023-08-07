import { Button } from "@mui/material";
import './style.css'
import ImgPath from '../../assets/kimetsu.png';

export default function Header(){
    return(
        <>
            <div className="left">
                <div className="left-text">
                <h1>Sua nova plataforma</h1>
                <h2>Para filmes de anime</h2>
                <p>Somente no ANICINE você tem acesso aos últimos lançamentos direto do japão</p>
                </div>
                <Button 
                variant="contained"
                sx={{
                    backgroundColor: 'var(--accent)',
                    borderRadius: '25px',
                    "&:hover":{
                        backgroundColor: 'var(--accent-3)'
                    }
                }}
                >Explorar</Button>
            </div>
            <div className="right">
                <img src={ImgPath} alt="" />
            </div>
        </>
    )
}