import { useScrollAnimation } from "../../controllers/useScrollAnimation";
import { Link } from "react-router-dom";

export function Nav() {
    const ref = useScrollAnimation('nav');
    return (
        <nav className="o360-nav" ref={ref}>
            <div className="o360-nav-logo">
                <img src={`${process.env.PUBLIC_URL}/logo nav-bar.png`} alt="Orlando 360 Logo" />
            </div>
            <div className="o360-nav-links">
                <a href="#sobre">Sobre mim</a>
                <a href="#identidade">Identidade Visual</a>
                <a href="#portfolio">Portfólio</a>
                <Link to="/checkout">Solicitar orçamento</Link>
            </div>
            <Link to="/checkout" className="o360-nav-cta">Quero criar minha marca</Link>
        </nav>
    );
}
