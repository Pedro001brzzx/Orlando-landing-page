import { useScrollAnimation } from "../../controllers/useScrollAnimation";

export function Footer() {
    const ref = useScrollAnimation('fadeUp', { selector: '.o360-footer-top, .o360-footer-nav, .o360-footer-copy' });
    return (
        <footer className="o360-footer" ref={ref}>
            <div className="o360-footer-top">
                <a href="#" className="o360-footer-icon">Bē</a>
                <a href="#" className="o360-footer-icon">in</a>
                <a href="#" className="o360-footer-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </a>
                <a href="mailto:contato@orlando360.com" className="o360-footer-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </a>
            </div>
            <div className="o360-footer-nav">
                <a href="#sobre">Sobre mim</a>
                <a href="#identidade">Identidade Visual</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#contato">Solicitar orçamento</a>
            </div>
            <p className="o360-footer-copy">2025 Orlando 360 Design. Todos os direitos reservados.</p>
        </footer >
    );
}
