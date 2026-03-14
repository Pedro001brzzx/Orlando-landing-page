import { useState } from "react";
import { useCarousel } from "../../controllers/useCarousel";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";

const brandingProjects = [
    {
        key: "drvieira",
        label: "Dr. Vieira",
        sub: "Design web Profissional",
        link: "https://dr-paulo.vercel.app/",
        srcs: ["/MOCKUP4.png", "/MOCKUP2.png"],
        styles: [
            { transform: "scale(1.15)", transformOrigin: "center" },
            { transform: "scale(1.45)", transformOrigin: "center" },
        ],
    },
];

function CardImage({ srcs, styles, alt }) {
    const [active, setActive] = useState(0);
    const multi = srcs.length > 1;
    const prev = () => setActive(i => (i - 1 + srcs.length) % srcs.length);
    const next = () => setActive(i => (i + 1) % srcs.length);

    return (
        <div className="o360-c-img">
            <img src={srcs[active]} alt={alt} style={styles?.[active]} />
            {multi && (
                <>
                    <button className="o360-c-arrow o360-c-arrow--prev" onClick={prev} aria-label="Anterior">‹</button>
                    <button className="o360-c-arrow o360-c-arrow--next" onClick={next} aria-label="Próximo">›</button>
                    <div className="o360-c-dots">
                        {srcs.map((_, i) => (
                            <button
                                key={i}
                                className={`o360-c-dot${i === active ? " active" : ""}`}
                                onClick={() => setActive(i)}
                                aria-label={`Imagem ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export function BrandingPortfolio() {
    const { pos, trackRef } = useCarousel(24);
    const ref = useScrollAnimation('scaleIn', { selector: '.o360-portfolio-header, .o360-carousel-item' });

    return (
        <section className="o360-portfolio" id="portfolio" ref={ref}>
            <div className="o360-portfolio-header">
                <p className="o360-section-label">Portfólio — Projetos selecionados</p>
            </div>
            <div className="o360-carousel-wrap">
                <div
                    className="o360-carousel-track"
                    ref={trackRef}
                    style={{ transform: `translateX(-${pos}px)` }}
                >
                    {brandingProjects.map((p) => {
                        const srcs = p.srcs;
                        return (
                            <div className="o360-carousel-item" key={p.key}>
                                <CardImage srcs={srcs} styles={p.styles} alt={p.label} />
                                <p className="o360-item-label">
                                    {p.label}
                                    {p.link && (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="o360-item-link-arrow"
                                            aria-label="Ver projeto"
                                        >
                                            ↗
                                        </a>
                                    )}
                                </p>
                                <p className="o360-item-sub">{p.sub}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
