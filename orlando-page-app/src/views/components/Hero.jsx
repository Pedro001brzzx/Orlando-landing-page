import { useScrollAnimation } from "../../controllers/useScrollAnimation";

export function Hero() {
    const ref = useScrollAnimation('staggerChildren', { selector: '.o360-eyebrow, .o360-heading, .o360-hero-bottom, .o360-hero-cta' });
    return (
        <section className="o360-hero" ref={ref}>
            <p className="o360-eyebrow">Brand Design · Identidade Visual · Direção de Arte</p>
            <h1 className="o360-heading">
                Marcas únicas e<br />
                <em>memoráveis</em> com um<br />
                olhar <em>estratégico</em>
            </h1>
            <div className="o360-hero-bottom">
                <div className="o360-hero-line" />
                <p className="o360-hero-sub">
                    Transforme a essência do seu negócio em uma marca{" "}
                    <strong>autêntica</strong> e <em>impactante</em> com uma
                    identidade visual exclusiva.
                </p>
            </div>
            <div className="o360-hero-cta">
                <a href="#contato" className="o360-btn-pill">Quero criar minha marca</a>
            </div>
        </section>
    );
}
