import { useScrollAnimation } from "../../controllers/useScrollAnimation";
import logo from "../../assets/logo2.png";

export function Nav() {
    const ref = useScrollAnimation('nav');
    return (
        <nav className="o360-nav" ref={ref}>
            <div className="o360-nav-logo">
                <img src={logo} alt="Orlando 360 Logo" />
            </div>
            <div className="o360-nav-links">
                <a href="#sobre">Sobre mim</a>
                <a href="#identidade">Identidade Visual</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#contato">Solicitar orçamento</a>
            </div>
            <a href="#contato" className="o360-nav-cta">Quero criar minha marca</a>
        </nav>
    );
}
