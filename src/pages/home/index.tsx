import Header from "../../components/header/Header";
import Card from "@mui/material/Card/Card";
import HomeCards from "../../components/homeCards/HomeCards";

import "../../styles/body.css";
import "./style.css";
import Footer from "../../components/footer/Footer";

export default function Home(){
    return(
        <div className="body">
            <Card 
            className="header-card"
            sx={{
                backgroundColor: 'var(--black-3)',
                color: 'var(--white)',
                borderRadius: '25px'
            }}
            >
                <Header />
            </Card>
            <section>
                <h1>Nossos Sucessos:</h1>
                <HomeCards/>
            </section>
            <Footer/>
        </div>
    )
}