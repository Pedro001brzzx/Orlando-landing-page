import { useState } from "react";
import { useCarousel } from "../../controllers/useCarousel";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";
import { projects } from "../../models/data";
import { IMGS } from "../../models/images";

function CardImage({ srcs, imgStyle, alt }) {
    const [active, setActive] = useState(0);
    const multi = srcs.length > 1;
    const prev = () => setActive(i => (i - 1 + srcs.length) % srcs.length);
    const next = () => setActive(i => (i + 1) % srcs.length);
    const style = Array.isArray(imgStyle) ? imgStyle[active] : imgStyle;

    return (
        <div className="o360-c-img">
            <img src={srcs[active]} alt={alt} style={style} />
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

export function Portfolio({ imageOverrides = {}, imageStyles = {}, labelOverrides = {}, linkOverrides = {} }) {
    const { pos, trackRef } = useCarousel(24);
    const ref = useScrollAnimation('scaleIn', { selector: '.o360-portfolio-header, .o360-carousel-item' });

    return (
        <section className="o360-portfolio" id="portfolio" ref={ref}>
            <div className="o360-portfolio-header">
                <p className="o360-section-label">Portfólio — Projetos selecionados.</p>
            </div>
            <div className="o360-carousel-wrap">
                <div
                    className="o360-carousel-track"
                    ref={trackRef}
                    style={{ transform: `translateX(-${pos}px)` }}
                >
                    {projects.map((p) => {
                        const override = imageOverrides[p.key];
                        const srcs = Array.isArray(override) ? override : override ? [override] : [IMGS[p.key]];
                        return (
                            <div className="o360-carousel-item" key={p.key}>
                                <CardImage srcs={srcs} imgStyle={imageStyles[p.key]} alt={p.label} />
                                <p className="o360-item-label">
                                    {labelOverrides[p.key]?.label ?? p.label}
                                    {linkOverrides[p.key] && (
                                        <a
                                            href={linkOverrides[p.key]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="o360-item-link-arrow"
                                            aria-label="Ver projeto"
                                        >
                                            ↗
                                        </a>
                                    )}
                                </p>
                                <p className="o360-item-sub">{labelOverrides[p.key]?.sub ?? p.sub}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
