import { useState } from "react";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";
import { Link } from "react-router-dom";

const WA_ORC = `https://wa.me/5583961756060?text=${encodeURIComponent("Olá! Quero solicitar um orçamento de webdesign com a Orlando 360.")}`;
const WA_PROJ = `https://wa.me/5583961756060?text=${encodeURIComponent("Olá! Quero criar meu projeto web com a Orlando 360.")}`;

function HamburgerIcon({ onClick, isOpen }) {
    return (
        <button
            onClick={onClick}
            aria-label="Menu"
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "5px",
                width: "40px",
                height: "40px",
            }}
        >
            <span style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                backgroundColor: "#ffffff",
                borderRadius: "2px",
                transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                transform: isOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                transformOrigin: "center",
            }} />
            <span style={{
                display: "block",
                width: "16px",
                height: "1.5px",
                backgroundColor: "#ffffff",
                borderRadius: "2px",
                transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? "translateX(8px)" : "none",
            }} />
            <span style={{
                display: "block",
                width: isOpen ? "24px" : "20px",
                height: "1.5px",
                backgroundColor: "#ffffff",
                borderRadius: "2px",
                transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                transform: isOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                transformOrigin: "center",
            }} />
        </button>
    );
}

export function BrandingNav() {
    const ref = useScrollAnimation('nav');
    const [open, setOpen] = useState(false);

    return (
        <nav className="o360-nav" ref={ref}>
            <Link to="/webdesign" className="o360-nav-logo">
                <img
                    src={`${process.env.PUBLIC_URL}/LOGO1_ORIG_WEBDESIGN_2186x219.png`}
                    alt="Orlando 360 Logo"
                />
            </Link>
            <div className="o360-nav-links">
                <a href="#sobre">Sobre nós</a>
                <a href="#identidade">Landing Page</a>
                <a href="#portfolio">Portfólio</a>
                <Link to="/">Branding</Link>
                <a href={WA_ORC} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
            </div>
            <a href={WA_PROJ} target="_blank" rel="noopener noreferrer" className="o360-nav-cta">Quero criar meu projeto</a>

            <div className="o360-nav-hamburger">
                <HamburgerIcon onClick={() => setOpen(!open)} isOpen={open} />
            </div>

            {open && (
                <div className="o360-nav-mobile-menu">
                    <a href="#sobre" onClick={() => setOpen(false)}>Sobre nós</a>
                    <a href="#identidade" onClick={() => setOpen(false)}>Landing Page</a>
                    <a href="#portfolio" onClick={() => setOpen(false)}>Portfólio</a>
                    <Link to="/" onClick={() => setOpen(false)}>Branding</Link>
                    <a href={WA_ORC} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Solicitar orçamento</a>
                    <a href={WA_PROJ} target="_blank" rel="noopener noreferrer" className="o360-mobile-cta" onClick={() => setOpen(false)}>Quero meu projeto</a>
                </div>
            )}
        </nav>
    );
}
