import { useReveal } from "../../controllers/useReveal";
import { Link } from "react-router-dom";

export function CTA() {
    const ref = useReveal();
    return (
        <section className="o360-cta o360-reveal" ref={ref} id="contato">
            <h2>VAMOS <em>TRABALHAR</em> JUNTOS</h2>
            <Link to="/checkout" className="o360-cta-link">Quero criar minha marca</Link>
        </section>
    );
}
