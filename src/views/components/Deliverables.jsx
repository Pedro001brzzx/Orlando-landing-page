import { useReveal } from "../../controllers/useReveal";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";

export function Deliverables() {
    const ref = useReveal();
    const listRef = useScrollAnimation('staggerChildren', { selector: 'li' });

    return (
        <section className="o360-deliverables o360-reveal" ref={ref} id="identidade">
            <div>
                <p className="o360-section-label" style={{ marginBottom: "1.2rem" }}>O que você recebe</p>
                <h2>Identidade <em>Visual</em></h2>
                <p>
                    Meu trabalho é focado em transforming a essência da sua marca em uma
                    expressão visual única, usando cores, logotipos, tipografias e elementos
                    gráficos que vão comunicar claramente os valores do seu negócio. Todo o
                    processo envolve uma imersão na essência da sua marca, desde o briefing até
                    a criação de uma identidade completa, passando por etapas de estratégia e
                    apresentação. Depois de tudo aprovado, você recebe todos os arquivos e o
                    brandbook para garantir que sua marca tenha consistência no mercado.
                </p>
            </div>
            <div>
                <p className="o360-entregaveis-label">Entregáveis</p>
                <ul className="o360-entregaveis-list" ref={listRef}>
                    {["Estratégia de marca", "Marca (Logotipo e variações)", "Paleta de cores", "Tipografia de apoio", "Textura e elementos gráficos", "PDF da apresentação com aplicações da marca", "Arquivos fechados para impressão", "Formatos entregues: .AI, .PDF, .EPS, .JPG, .SVG, .PNG", "Manual de marca", "Registro de anterioridade", "+ Desdobramentos (papelaria & itens digitais)"].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
