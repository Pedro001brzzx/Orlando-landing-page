import { useReveal } from "../../controllers/useReveal";
import { useScrollAnimation } from "../../controllers/useScrollAnimation";

export function BrandingDeliverables() {
    const ref = useReveal();
    const listRef = useScrollAnimation('staggerChildren', { selector: 'li' });

    return (
        <section className="o360-deliverables o360-reveal" ref={ref} id="identidade">
            <div>
                <p className="o360-section-label" style={{ marginBottom: "1.2rem" }}>O que você recebe</p>
                <h2>Landing <em>Page</em></h2>
                <p>
                    Criamos landing pages e sites que traduzem a personalidade da sua marca
                    em cada detalhe — do layout à escolha de cores, tipografia e imagens.
                    O processo começa com um mergulho no seu negócio: entendemos seus objetivos,
                    seu público e o que diferencia você no mercado. A partir daí, desenhamos
                    páginas estratégicas, pensadas para converter visitantes em clientes.
                    Após a aprovação, você recebe o site publicado, todos os arquivos-fonte
                    e um guia de uso para manter a consistência da sua presença digital.
                </p>
            </div>
            <div>
                <p className="o360-entregaveis-label">Entregáveis</p>
                <ul className="o360-entregaveis-list" ref={listRef}>
                    {[
                        "Landing Page de Alta Conversão",
                        "Webdesign Completo",
                        "Copywriting",
                        "Funcionalidades Dinâmicas",
                        "Gestão de dados e processos",
                        "Desenvolvimento Personalizado",
                        "Multidispositivo",
                    ].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
