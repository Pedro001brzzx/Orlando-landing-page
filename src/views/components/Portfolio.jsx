import { useCarousel } from "../../controllers/useCarousel";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";
import { projects } from "../../models/data";
import { IMGS } from "../../models/images";

export function Portfolio() {
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
                    {projects.map((p, i) => (
                        <div className="o360-carousel-item" key={p.key}>
                            <div className="o360-c-img">
                                <img src={IMGS[p.key]} alt={p.label} />
                            </div>
                            <p className="o360-item-label">{p.label}</p>
                            <p className="o360-item-sub">{p.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
