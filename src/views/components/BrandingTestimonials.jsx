import { useState } from "react";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";

const brandingTestimonials = [
    {
        name: "Rafael Duarte",
        text: "Precisava de uma landing page que convertesse de verdade e a Orlando 360 entregou exatamente isso. Em duas semanas meu faturamento já tinha mudado.",
        highlight: "Site rápido, direto e que vende. Sem enrolação, só resultado.",
    },
    {
        name: "Camila Fonseca",
        text: "Eu vivia jogando dinheiro em tráfego e meu site não convertia nada! Depois que a Orlando 360 refez minha página, meus leads triplicaram. Parece mágica, mas é design bem feito.",
        highlight: "Melhor investimento que fiz pro meu negócio!",
    },
    {
        name: "Dr. Henrique Vasconcellos",
        text: "A Orlando 360 compreendeu com precisão o posicionamento da minha clínica e traduziu isso em uma experiência digital impecável. A navegação é fluida, o design transmite autoridade e os agendamentos online aumentaram significativamente.",
        highlight: "Um trabalho de excelência em UI/UX que elevou a percepção da minha marca.",
    },
    {
        name: "Juliana Martins",
        text: "Eu já tinha feito site com outros profissionais, mas nenhum trazia aquela sensação de \"é isso\". A equipe da Orlando 360 ouviu cada detalhe do que eu queria e criou uma página que realmente conta a história da minha marca.",
        highlight: "As conversões vieram naturalmente. Pela primeira vez meu site trabalha por mim.",
    },
    {
        name: "Thiago Rocha",
        text: "Meu e-commerce precisava de uma página de vendas que passasse credibilidade e guiasse o cliente até o checkout sem atrito. A Orlando 360 entregou isso com uma estrutura de UX impecável. O tempo médio na página dobrou e a taxa de conversão subiu 40%.",
        highlight: "Investimento que se pagou no primeiro mês.",
    },
];

export function BrandingTestimonials() {
    const ref = useScrollAnimation('staggerChildren', { selector: '.o360-testi-card' });
    const [activeIndex, setActiveIndex] = useState(0);

    const nextIdx = () => {
        if (activeIndex < brandingTestimonials.length - 1) setActiveIndex(activeIndex + 1);
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
                    {brandingTestimonials.map((t) => (
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
                    {brandingTestimonials.map((_, i) => (
                        <div key={i} className={`o360-testi-dot ${activeIndex === i ? 'active' : ''}`} />
                    ))}
                </div>
                <button
                    onClick={nextIdx}
                    disabled={activeIndex === brandingTestimonials.length - 1}
                    style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--white)', width: '40px', height: '40px', borderRadius: '50%', cursor: activeIndex === brandingTestimonials.length - 1 ? 'not-allowed' : 'pointer', opacity: activeIndex === brandingTestimonials.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s' }}
                >
                    &rarr;
                </button>
            </div>
        </section>
    );
}
