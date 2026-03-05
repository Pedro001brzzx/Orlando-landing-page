import { useScrollAnimation } from "../../controllers/useScrollAnimation";
import { IMGS } from "../../models/images";

export function Sobre() {
    const ref = useScrollAnimation('fadeUp', { selector: '.o360-sobre-img-wrap, .o360-sobre-right, .o360-stat' });
    return (
        <section className="o360-sobre" ref={ref} id="sobre">
            <div className="o360-sobre-img-wrap">
                <div className="o360-sobre-circle">
                    <img src={IMGS.avatar} alt="Orlando" />
                </div>
            </div>
            <div className="o360-sobre-right">
                <h2>Sou o <em>Orlando</em></h2>
                <p>
                    Designer brasileiro especializado em identidade visual. Transformo sonhos em
                    marcas estratégicas e sinto uma satisfação enorme em construir algo tão importante
                    quanto a imagem de empresas e pessoas. São <strong>7 anos de experiência</strong> em branding e{" "}
                    <strong>242 projetos desenvolvidos</strong> para clientes no Brasil, Estados Unidos, Canadá e França.
                    Sou o <strong>Brand Designer da Orlando 360</strong>, e diretor de arte.
                </p>
                <div className="o360-badge">
                    <span style={{ fontWeight: 700, letterSpacing: ".06em", fontSize: ".8rem" }}>Bē</span>
                    <span>—</span>
                    <span>Destaque internacional <strong>em design gráfico</strong></span>
                </div>
            </div>
            <div className="o360-stats-row">
                {[{ num: "+242", lbl: "Projetos desenvolvidos" }, { num: "+7", lbl: "Anos de experiência" }, { num: "+4", lbl: "Países atendidos" }].map(s => (
                    <div className="o360-stat" key={s.lbl}>
                        <p className="num">{s.num}</p>
                        <p className="lbl">{s.lbl}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
