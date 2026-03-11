import { useScrollAnimation } from "../../controllers/useScrollAnimation";

export function BrandingSobre() {
    const ref = useScrollAnimation('fadeUp', { selector: '.o360-sobre-img-wrap, .o360-sobre-right' });
    return (
        <section className="o360-sobre" ref={ref} id="sobre">
            <div className="o360-sobre-img-wrap">
                <img
                    src={`${process.env.PUBLIC_URL}/AVATAR3.png`}
                    alt="Orlando 360"
                    style={{
                        width: "100%",
                        maxWidth: "420px",
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            </div>
            <div className="o360-sobre-right">
                <h2><em>Orlando 360</em></h2>
                <p>
                    A Orlando 360 existe por um motivo simples: seu site deveria vender por você.
                    Somos uma agência de webdesign focada em criar páginas que convertem no automático
                    — do primeiro clique ao fechamento. Com mais de 3 anos de experiência em UI/UX e
                    atuação no Brasil e nos Estados Unidos, a gente não faz site pra ficar bonito parado.
                    Faz para <strong>aumentar as vendas</strong>.
                </p>
            </div>
        </section>
    );
}
