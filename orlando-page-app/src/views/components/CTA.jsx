import { useReveal } from "../../controllers/useReveal";

export function CTA() {
    const ref = useReveal();
    return (
        <section className="o360-cta o360-reveal" ref={ref} id="contato">
            <h2>VAMOS <em>TRABALHAR</em> JUNTOS</h2>
            <a href="mailto:contato@orlando360.com" className="o360-cta-link">Quero criar minha marca</a>
        </section>
    );
}
