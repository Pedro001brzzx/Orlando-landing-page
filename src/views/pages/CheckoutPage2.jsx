import { useState } from "react";
import { Link } from "react-router-dom";
import GrokStarfield from "../components/GrokStarfield";

const HomeIcon = ({ size = 24, color = "#ffffff", hovered = false }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            cursor: "pointer",
            transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
            opacity: hovered ? 1 : 0.75,
        }}
    >
        <path
            d="M3 11L12 3L21 11"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
        />
        <path
            d="M5 9.5V20H10V14H14V20H19V9.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
        />
    </svg>
);

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');

  :root {
    --gold: #C9A84C;
    --gold-light: #E8C96A;
    --gold-dim: rgba(201,168,76,0.15);
    --bg: #0A0A0B;
    --surface: #111114;
    --surface2: #18181D;
    --text: #F0EDE6;
    --muted: #7A7870;
    --diamond: #A8D8EA;
    --diamond-dim: rgba(168,216,234,0.12);
    --border: rgba(255,255,255,0.08);
  }

  .cp2-wrap {
    background: transparent;
    color: var(--text);
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* NAV */
  .cp2-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 6vw;
    border-bottom: 1px solid var(--border);
    background: rgba(10,10,11,0.95);
    backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .cp2-nav-logo img { height: 33px; }
  .cp2-nav-back {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }
  .cp2-nav-back:hover { color: var(--text); }

  /* HEADER */
  .cp2-header {
    text-align: center;
    padding: 72px 20px 56px;
  }
  .cp2-header-label {
    font-size: 11px;
    letter-spacing: 0.35em;
    color: var(--gold);
    text-transform: uppercase;
    display: block;
    margin-bottom: 16px;
  }
  .cp2-header h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .cp2-header h1 em { font-style: italic; color: var(--gold); }
  .cp2-header-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 24px auto 0;
  }

  /* GRAIN */
  .cp2-wrap::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
  }

  /* CARDS */
  .cp2-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px 80px;
    position: relative;
    z-index: 1;
  }

  .cp2-card {
    position: relative;
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 2px;
    padding: 44px 36px 40px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.35s, box-shadow 0.35s, transform 0.35s;
  }
  .cp2-card:hover { transform: translateY(-6px); box-shadow: 0 32px 80px rgba(0,0,0,0.5); }
  .cp2-card::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 80px; height: 80px;
    border-top: 1px solid var(--gold);
    border-right: 1px solid var(--gold);
    opacity: 0.4;
    transition: opacity 0.35s, width 0.35s, height 0.35s;
  }
  .cp2-card:hover::before { opacity: 0.9; width: 100px; height: 100px; }

  .cp2-card.standard:hover { border-color: rgba(201,168,76,0.3); }
  .cp2-card.plan360 {
    background: var(--surface2);
    border-color: rgba(201,168,76,0.35);
    box-shadow: 0 0 0 1px rgba(201,168,76,0.1), 0 24px 60px rgba(0,0,0,0.4);
  }
  .cp2-card.plan360:hover { border-color: rgba(201,168,76,0.7); }
  .cp2-card.plan360::before { opacity: 0.8; }
  .cp2-card.plan360::after {
    content: '';
    position: absolute;
    top: -60px; left: 50%;
    transform: translateX(-50%);
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .cp2-card.diamond { border-color: rgba(168,216,234,0.2); }
  .cp2-card.diamond::before { border-color: var(--diamond); }
  .cp2-card.diamond:hover { border-color: rgba(168,216,234,0.5); }

  .cp2-badge {
    display: inline-block;
    font-size: 9px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 2px;
    margin-bottom: 24px;
    font-weight: 500;
  }
  .cp2-badge.gold { background: var(--gold-dim); color: var(--gold); border: 1px solid rgba(201,168,76,0.3); }
  .cp2-badge.featured { background: var(--gold); color: #0A0A0B; }
  .cp2-badge.diamond-b { background: var(--diamond-dim); color: var(--diamond); border: 1px solid rgba(168,216,234,0.3); }

  .cp2-plan-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-bottom: 4px;
    line-height: 1;
  }
  .cp2-plan-name.gold-text { color: var(--gold-light); }
  .cp2-plan-name.diamond-text { color: var(--diamond); }

  .cp2-plan-sub {
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 28px;
  }

  .cp2-divider { height: 1px; margin-bottom: 24px; }
  .cp2-divider.gold-d { background: linear-gradient(90deg, rgba(201,168,76,0.3), transparent); }
  .cp2-divider.diamond-d { background: linear-gradient(90deg, rgba(168,216,234,0.25), transparent); }

  .cp2-features { list-style: none; margin-bottom: 32px; display: flex; flex-direction: column; gap: 11px; }
  .cp2-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #C8C5BC; line-height: 1.4; font-weight: 300; }
  .cp2-features li svg { flex-shrink: 0; margin-top: 2px; }

  .cp2-deadline {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 28px;
  }
  .cp2-deadline-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--muted); flex-shrink: 0; }

  .cp2-btn {
    display: block;
    width: 100%;
    padding: 14px 20px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
  }
  .cp2-btn-outline { background: transparent; border: 1px solid rgba(201,168,76,0.35); color: var(--gold); }
  .cp2-btn-outline:hover { background: var(--gold-dim); border-color: var(--gold); }
  .cp2-btn-gold { background: var(--gold); color: #0A0A0B; }
  .cp2-btn-gold:hover { background: var(--gold-light); box-shadow: 0 8px 30px rgba(201,168,76,0.3); }
  .cp2-btn-diamond { background: transparent; border: 1px solid rgba(168,216,234,0.35); color: var(--diamond); }
  .cp2-btn-diamond:hover { background: var(--diamond-dim); border-color: var(--diamond); }

  /* FORM */
  .cp2-form-wrap {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 24px 80px;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .cp2-form-header { margin-bottom: 48px; }
  .cp2-form-header h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 16px;
  }
  .cp2-form-header h2 em { font-style: italic; color: var(--gold); }

  .cp2-selected-plan {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid rgba(201,168,76,0.3);
    background: var(--gold-dim);
    padding: 6px 14px;
    border-radius: 2px;
  }
  .cp2-selected-plan.diamond-plan { color: var(--diamond); border-color: rgba(168,216,234,0.3); background: var(--diamond-dim); }

  .cp2-field {
    border-bottom: 1px solid rgba(255,255,255,0.28);
    padding: 1.4rem 0;
    transition: border-color 0.25s;
  }
  .cp2-field:focus-within { border-color: rgba(201,168,76,0.8); }
  .cp2-field label {
    display: block;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(201,168,76,0.8);
    margin-bottom: 0.65rem;
  }
  .cp2-field input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.92rem;
    font-weight: 300;
    caret-color: var(--gold);
  }
  .cp2-field input::placeholder { color: rgba(255,255,255,0.18); }

  .cp2-form-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.5rem;
    gap: 1rem;
  }
  .cp2-back-link {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    transition: color 0.2s;
  }
  .cp2-back-link:hover { color: var(--text); }
  .cp2-submit-btn {
    background: var(--gold);
    color: #0A0A0B;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 1rem 2.2rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.25s, transform 0.2s;
  }
  .cp2-submit-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

  /* SUCCESS */
  .cp2-success {
    text-align: center;
    padding: 8rem 6vw;
    position: relative;
    z-index: 1;
  }
  .cp2-success h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    font-weight: 300;
    margin-bottom: 1.5rem;
  }
  .cp2-success h2 em { font-style: italic; color: var(--gold); }
  .cp2-success p { font-size: 0.88rem; font-weight: 300; color: rgba(255,255,255,0.5); line-height: 1.8; }

  .cp2-footer-note {
    text-align: center;
    font-size: 12px;
    color: var(--muted);
    letter-spacing: 0.1em;
    padding: 0 24px 48px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .cp2-cards { grid-template-columns: 1fr; padding: 0 16px 60px; }
    .cp2-form-wrap { padding: 0 16px 60px; }
    .cp2-form-actions { flex-direction: column-reverse; align-items: flex-start; }
  }
`;

const plans = [
    {
        id: "standard",
        cardClass: "standard",
        badgeClass: "gold",
        badgeText: "Plano 01",
        nameClass: "",
        name: "Standard",
        subtitle: "Presença digital essencial",
        dividerClass: "gold-d",
        features: [
            "Landing page de alta conversão",
            "Otimizado para todos os dispositivos",
            "2 revisões inclusas",
        ],
        iconColor: "#C9A84C",
        deadline: "Entrega em até 15 dias",
        deadlineDotStyle: {},
        btnClass: "cp2-btn-outline",
        btnText: "Quero este plano",
    },
    {
        id: "360",
        cardClass: "plan360",
        badgeClass: "featured",
        badgeText: "✦ Mais popular",
        nameClass: "gold-text",
        name: "Plano 360",
        subtitle: "Solução completa & acelerada",
        dividerClass: "gold-d",
        features: [
            "Landing page de alta conversão",
            "Otimizado para todos os dispositivos",
            "2 revisões inclusas",
            "Identidade visual completa",
            "Copywriting estratégico",
        ],
        iconColor: "#C9A84C",
        deadline: "Entrega em apenas 7 dias",
        deadlineDotStyle: { background: "#C9A84C" },
        btnClass: "cp2-btn-gold",
        btnText: "Quero este plano",
    },
    {
        id: "diamond",
        cardClass: "diamond",
        badgeClass: "diamond-b",
        badgeText: "✦ Plano 03",
        nameClass: "diamond-text",
        name: "Diamond",
        subtitle: "Desenvolvimento sob medida",
        dividerClass: "diamond-d",
        features: [
            "Webdesign completo",
            "Otimizado para todos os dispositivos",
            "2 revisões inclusas",
            "Identidade visual completa",
            "Copywriting estratégico",
            "Funcionalidades dinâmicas",
            "Gestão de dados e processos",
            "Desenvolvimento personalizado",
            "Suporte pós-lançamento",
        ],
        iconColor: "#A8D8EA",
        deadline: "Prazo a combinar",
        deadlineDotStyle: { background: "#A8D8EA" },
        btnClass: "cp2-btn-diamond",
        btnText: "Solicitar proposta",
    },
];

const CheckIcon = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="2,8 6,12 14,4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function CheckoutPage2() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [form, setForm] = useState({ nome: "", contato: "" });
    const [homeHovered, setHomeHovered] = useState(false);

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = [
            `Olá! Tenho interesse no plano de webdesign ${selectedPlan.name}.`,
            ``,
            `Nome: ${form.nome}`,
            `Contato: ${form.contato}`,
        ].join('\n');
        window.open(`https://wa.me/558396175060?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <div className="cp2-wrap">
            <style>{css}</style>
            <GrokStarfield />

            <nav className="cp2-nav">
                <div className="cp2-nav-logo">
                    <img src={`${process.env.PUBLIC_URL}/LOGO1_ORIG_WEBDESIGN_2186x219.png`} alt="Orlando 360" />
                </div>
                <Link
                    to="/webdesign"
                    className="cp2-nav-back"
                    aria-label="Home"
                    onMouseEnter={() => setHomeHovered(true)}
                    onMouseLeave={() => setHomeHovered(false)}
                >
                    <HomeIcon size={20} hovered={homeHovered} />
                </Link>
            </nav>

            {selectedPlan ? (
                <>
                    <div className="cp2-header">
                        <span className="cp2-header-label">Orlando Web Studio</span>
                        <h1>Vamos criar algo <em>incrível</em></h1>
                        <div className="cp2-header-line" />
                    </div>
                    <div className="cp2-form-wrap">
                        <div className="cp2-form-header">
                            <div className={`cp2-selected-plan ${selectedPlan.id === "diamond" ? "diamond-plan" : ""}`}>
                                ✦ {selectedPlan.name}
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="cp2-field">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    value={form.nome}
                                    onChange={e => set("nome", e.target.value)}
                                    required
                                />
                            </div>
                            <div className="cp2-field">
                                <label>Contato (WhatsApp ou E-mail)</label>
                                <input
                                    type="text"
                                    placeholder="+55 (11) 90000-0000 ou email@exemplo.com"
                                    value={form.contato}
                                    onChange={e => set("contato", e.target.value)}
                                    required
                                />
                            </div>
                            <div className="cp2-form-actions">
                                <button type="button" className="cp2-back-link" onClick={() => setSelectedPlan(null)}>
                                    ← Trocar plano
                                </button>
                                <button type="submit" className="cp2-submit-btn">Enviar</button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <>
                    <div className="cp2-header">
                        <span className="cp2-header-label">Orlando Web Studio</span>
                        <h1>Nossos <em>Planos</em></h1>
                        <div className="cp2-header-line" />
                    </div>
                    <div className="cp2-cards">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`cp2-card ${plan.cardClass}`}
                                onClick={() => setSelectedPlan(plan)}
                            >
                                <span className={`cp2-badge ${plan.badgeClass}`}>{plan.badgeText}</span>
                                <h2 className={`cp2-plan-name ${plan.nameClass}`}>{plan.name}</h2>
                                <p className="cp2-plan-sub">{plan.subtitle}</p>
                                <div className={`cp2-divider ${plan.dividerClass}`} />
                                <ul className="cp2-features">
                                    {plan.features.map((f, i) => (
                                        <li key={i}>
                                            <CheckIcon color={plan.iconColor} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="cp2-deadline">
                                    <div className="cp2-deadline-dot" style={plan.deadlineDotStyle} />
                                    {plan.deadline}
                                </div>
                                <button className={`cp2-btn ${plan.btnClass}`} onClick={(e) => { e.stopPropagation(); setSelectedPlan(plan); }}>
                                    {plan.btnText}
                                </button>
                            </div>
                        ))}
                    </div>
                    <p className="cp2-footer-note">Todos os planos incluem hospedagem no primeiro mês · Suporte via WhatsApp</p>
                </>
            )}
        </div>
    );
}
