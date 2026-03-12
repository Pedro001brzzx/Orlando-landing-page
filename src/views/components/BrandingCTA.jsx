import { useReveal } from "../../controllers/useReveal";
import { Link } from "react-router-dom";

export function BrandingCTA() {
    const ref = useReveal();
    return (
        <section className="o360-cta o360-reveal" ref={ref} id="contato">
            <h2>VAMOS <em>TRABALHAR</em> JUNTOS</h2>
            <Link to="/checkout2" className="o360-cta-link">Quero criar meu projeto</Link>
        </section>
    );
}
