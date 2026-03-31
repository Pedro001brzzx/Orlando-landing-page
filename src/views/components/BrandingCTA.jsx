import { useReveal } from "../../controllers/useReveal";

const WA_URL = `https://wa.me/5583961756060?text=${encodeURIComponent("Olá! Quero criar meu projeto web com a Orlando 360.")}`;

export function BrandingCTA() {
    const ref = useReveal();
    return (
        <section className="o360-cta o360-reveal" ref={ref} id="contato">
            <h2>VAMOS <em>TRABALHAR</em> JUNTOS</h2>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="o360-cta-link">Quero criar meu projeto</a>
        </section>
    );
}
