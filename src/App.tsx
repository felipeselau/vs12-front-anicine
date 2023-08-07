import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Search from "./pages/search";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";
import LogOut from "./pages/logout";
import LogoText from "./assets/logotexto.png";

function App() {
  return (
    <>
      <div className="logo-container">
        <img
          src={LogoText}
          alt="Logo do site seguido da escrita AniCine"
          className="head-logo"
        />
      </div>
      <BrowserRouter>
        <NavBar current="Home"></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
