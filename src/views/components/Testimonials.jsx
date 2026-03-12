import { useState } from "react";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";
import { testimonials } from "../../models/data";

export function Testimonials() {
    const ref = useScrollAnimation('staggerChildren', { selector: '.o360-testi-card' });
    const [activeIndex, setActiveIndex] = useState(0);

    const nextIdx = () => {
        if (activeIndex < testimonials.length - 1) setActiveIndex(activeIndex + 1);
    };

    const prevIdx = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };

    return (
        <section className="o360-testimonials" ref={ref}>
            <div className="o360-testi-header">
                <p className="o360-section-label" style={{ marginBottom: "1rem" }}>Depoimentos</p>
                <h2>O que dizem os <em>clientes</em></h2>
            </div>
            <div className="o360-testi-wrap" style={{ overflow: "hidden" }}>
                <div
                    className="o360-testi-grid"
                    style={{
                        transform: `translateX(calc(-${activeIndex} * (var(--card-w, 380px) + 1.5rem)))`
                    }}
                >
                    {testimonials.map((t) => (
                        <div className="o360-testi-card" key={t.name}>
                            <p className="o360-testi-name">{t.name}</p>
                            <p className="o360-testi-text">
                                {t.text} <strong>{t.highlight}</strong>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="o360-testi-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '3rem' }}>
                <button
                    onClick={prevIdx}
                    disabled={activeIndex === 0}
                    style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--white)', width: '40px', height: '40px', borderRadius: '50%', cursor: activeIndex === 0 ? 'not-allowed' : 'pointer', opacity: activeIndex === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s' }}
                >
                    &larr;
                </button>
                <div className="o360-testi-dots" style={{ marginTop: 0 }}>
                    {testimonials.map((_, i) => (
                        <div key={i} className={`o360-testi-dot ${activeIndex === i ? 'active' : ''}`} />
                    ))}
                </div>
                <button
                    onClick={nextIdx}
                    disabled={activeIndex === testimonials.length - 1}
                    style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--white)', width: '40px', height: '40px', borderRadius: '50%', cursor: activeIndex === testimonials.length - 1 ? 'not-allowed' : 'pointer', opacity: activeIndex === testimonials.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s' }}
                >
                    &rarr;
                </button>
            </div>
        </section>
    );
}
