import { useScrollAnimation } from "../../controllers/useScrollAnimation";

const WA_URL = `https://wa.me/558396175060?text=${encodeURIComponent("Olá! Quero criar minha landing page com a Orlando 360.")}`;

export function BrandingHero() {
    const ref = useScrollAnimation('staggerChildren', { selector: '.o360-eyebrow, .o360-heading, .o360-hero-bottom, .o360-hero-cta' });
    return (
        <section className="o360-hero" ref={ref}>
            <p className="o360-eyebrow">Web Design · Landing Page · Desenvolvimento Web</p>
            <h1 className="o360-heading">
                Sites únicos e<br />
                <em>memoráveis</em> com um<br />
                olhar <em>estratégico</em>
            </h1>
            <div className="o360-hero-bottom">
                <div className="o360-hero-line" />
                <p className="o360-hero-sub">
                    Transforme seu negócio em uma máquina de vendas,{" "}
                    com uma landing page exclusiva.
                </p>
            </div>
            <div className="o360-hero-cta">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="o360-btn-pill">Quero minha landing page</a>
            </div>
        </section>
    );
}
