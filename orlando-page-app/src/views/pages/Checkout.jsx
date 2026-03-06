import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');

  :root {
    --black: #0a0a0a; --dark: #111111; --card: #1a1a1a;
    --border: #2a2a2a; --cream: #f5f0e8; --white: #ffffff;
    --accent: #7ec8c8; --accent2: #d4956a;
    --muted: rgba(255,255,255,0.45);
    --label: rgba(126,200,200,0.85);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: var(--black); color: var(--white); font-family: 'Montserrat', sans-serif; overflow-x: hidden; }

  /* NAV */
  .orc-nav { display:flex; align-items:center; justify-content:space-between; padding:1.6rem 6vw; position:sticky; top:0; z-index:100; background:rgba(10,10,10,.95); backdrop-filter:blur(12px); border-bottom:1px solid var(--border); }
  .orc-nav-logo { font-family:'Cormorant Garamond',serif; font-size:1.3rem; font-weight:600; letter-spacing:.22em; text-transform:uppercase; color:var(--white); text-decoration:none; }
  .orc-nav-logo span { font-weight:300; }
  .orc-nav-links { display:flex; gap:2.5rem; }
  .orc-nav-links a { font-size:.7rem; font-weight:500; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); text-decoration:none; transition:color .25s; }
  .orc-nav-links a:hover { color:var(--white); }

  /* HERO */
  .orc-hero { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; padding:6rem 8vw 5rem; min-height:55vh; }
  .orc-hero h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(3.5rem,7vw,7rem); font-weight:300; line-height:.95; }
  .orc-hero h1 em { font-style:italic; }
  .orc-hero-right { padding-top:1rem; }
  .orc-hero-right p { font-size:.88rem; font-weight:300; line-height:1.8; color:rgba(255,255,255,.55); margin-bottom:1.2rem; }
  .orc-hero-right p strong { color:var(--white); font-weight:500; }
  .orc-hero-right .star-note { color:var(--white); font-size:.88rem; font-weight:300; line-height:1.75; }
  .orc-hero-right .star-note strong { font-weight:600; }
  .orc-hero-right .reply-note { margin-top:1rem; font-size:.8rem; color:rgba(255,255,255,.38); }

  /* FORM WRAPPER */
  .orc-form-wrap { padding:0 8vw 8rem; max-width:1200px; margin:0 auto; }

  /* FIELD BASE */
  .orc-field { border-bottom:1px solid rgba(255,255,255,.15); padding:1.6rem 0; transition:border-color .25s; position:relative; }
  .orc-field:focus-within { border-color:rgba(126,200,200,.6); }
  .orc-field label { display:block; font-size:.68rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:var(--label); margin-bottom:.75rem; }
  .orc-field input, .orc-field textarea {
    width:100%; background:transparent; border:none; outline:none;
    color:var(--white); font-family:'Montserrat',sans-serif;
    font-size:.92rem; font-weight:300; caret-color:var(--accent);
  }
  .orc-field input::placeholder, .orc-field textarea::placeholder { color:rgba(255,255,255,.18); }
  .orc-field textarea { resize:none; min-height:80px; line-height:1.7; }

  /* CHAR COUNT */
  .orc-char-count { text-align:right; font-size:.65rem; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.28); margin-top:.5rem; }

  /* DROPDOWN */
  .orc-dropdown { position:relative; }
  .orc-dropdown-trigger { display:flex; align-items:center; justify-content:space-between; cursor:pointer; width:100%; background:transparent; border:none; outline:none; padding:0; }
  .orc-dropdown-trigger span { font-size:.92rem; font-weight:300; color:rgba(255,255,255,.35); font-family:'Montserrat',sans-serif; }
  .orc-dropdown-trigger span.selected { color:var(--white); }
  .orc-dropdown-arrow { font-size:.8rem; color:var(--muted); transition:transform .25s; }
  .orc-dropdown-arrow.open { transform:rotate(180deg); }
  .orc-dropdown-menu { position:absolute; top:calc(100% + 1rem); left:0; right:0; background:#181818; border:1px solid var(--border); border-radius:6px; overflow:hidden; z-index:50; animation:dropIn .2s ease; }
  @keyframes dropIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
  .orc-dropdown-menu .orc-dd-placeholder { padding:.9rem 1.2rem; font-size:.78rem; color:rgba(255,255,255,.3); font-family:'Montserrat',sans-serif; border-bottom:1px solid var(--border); }
  .orc-dropdown-option { padding:.9rem 1.2rem; font-size:.88rem; font-weight:300; color:var(--white); cursor:pointer; transition:background .15s; font-family:'Montserrat',sans-serif; }
  .orc-dropdown-option:hover, .orc-dropdown-option.active { background:rgba(126,200,200,.08); color:var(--accent); }

  /* CHECKBOXES */
  .orc-checkbox-section { padding:1.8rem 0 1rem; border-bottom:1px solid rgba(255,255,255,.15); }
  .orc-checkbox-section-label { font-size:.68rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:var(--label); margin-bottom:1.4rem; display:flex; gap:.5rem; align-items:center; }
  .orc-checkbox-section-label .req { color:rgba(255,255,255,.3); }
  .orc-checkbox-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:.8rem 2rem; }
  .orc-checkbox-grid.two-col { grid-template-columns:repeat(2,1fr); }
  .orc-checkbox-item { display:flex; align-items:center; gap:.75rem; cursor:pointer; padding:.3rem 0; }
  .orc-checkbox-box { width:16px; height:16px; border:1px solid rgba(255,255,255,.25); border-radius:2px; flex-shrink:0; display:flex; align-items:center; justify-content:center; transition:border-color .2s, background .2s; }
  .orc-checkbox-item:hover .orc-checkbox-box { border-color:var(--accent); }
  .orc-checkbox-item.checked .orc-checkbox-box { background:var(--accent); border-color:var(--accent); }
  .orc-checkbox-box svg { opacity:0; transition:opacity .15s; }
  .orc-checkbox-item.checked .orc-checkbox-box svg { opacity:1; }
  .orc-checkbox-text { font-size:.72rem; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.6); transition:color .2s; }
  .orc-checkbox-item:hover .orc-checkbox-text, .orc-checkbox-item.checked .orc-checkbox-text { color:var(--white); }

  /* SUBMIT */
  .orc-submit-row { display:flex; justify-content:flex-end; padding-top:3rem; }
  .orc-submit-btn { background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:var(--white); font-family:'Montserrat',sans-serif; font-size:.72rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase; padding:1rem 2.4rem; border-radius:50px; cursor:pointer; transition:background .25s,transform .2s; }
  .orc-submit-btn:hover { background:var(--white); color:var(--black); transform:translateY(-1px); }

  /* SUCCESS */
  .orc-success { text-align:center; padding:8rem 6vw; }
  .orc-success h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(3rem,5vw,5rem); font-weight:300; margin-bottom:1.5rem; }
  .orc-success h2 em { font-style:italic; }
  .orc-success p { font-size:.9rem; font-weight:300; color:rgba(255,255,255,.55); line-height:1.8; }

  @media(max-width:768px) {
    .orc-hero { grid-template-columns:1fr; gap:2.5rem; padding:4rem 6vw 3rem; }
    .orc-form-wrap { padding:0 6vw 6rem; }
    .orc-checkbox-grid { grid-template-columns:1fr 1fr; }
    .orc-nav-links { display:none; }
  }
`;

const papelaria = [
    "Cartão de Visita", "Papel Timbrado", "Certificado", "Crachá",
    "Adesivo", "Cartão Fidelidade", "Pasta"
];

const prazoOptions = ["2 dias", "4 dias", "7 dias"];



function Dropdown({ label, placeholder, options, value, onChange }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="orc-field orc-dropdown">
            <label>{label}</label>
            <button className="orc-dropdown-trigger" onClick={() => setOpen(o => !o)} type="button">
                <span className={value ? "selected" : ""}>{value || placeholder}</span>
                <span className={`orc-dropdown-arrow ${open ? "open" : ""}`}>⌄</span>
            </button>
            {open && (
                <div className="orc-dropdown-menu">
                    <div className="orc-dd-placeholder">{placeholder}</div>
                    {options.map(opt => (
                        <div
                            key={opt}
                            className={`orc-dropdown-option ${value === opt ? "active" : ""}`}
                            onClick={() => { onChange(opt); setOpen(false); }}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function CheckItem({ label, checked, onChange }) {
    return (
        <div className={`orc-checkbox-item ${checked ? "checked" : ""}`} onClick={onChange}>
            <div className="orc-checkbox-box">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <span className="orc-checkbox-text">{label}</span>
        </div>
    );
}

export default function Orcamento() {
    const [form, setForm] = useState({
        nome: "", email: "", telefone: "", empresa: "", prazo: "",
    });
    const [papelariaSel, setPapelariaSel] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const toggleArr = (arr, setArr, val) =>
        setArr(a => a.includes(val) ? a.filter(x => x !== val) : [...a, val]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...form,
            papelaria: papelariaSel,
        };

        try {
            await fetch("https://submit-form.com/mEBIhCXcL", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            // Mostrar a tela de sucesso de qualquer modo ou lidar com erro aqui
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <>
                <style>{css}</style>
                <nav className="o360-nav">
                    <Link to="/" className="o360-nav-logo">
                        <img src={logo} alt="Orlando 360 Logo" />
                    </Link>
                </nav>
                <div className="orc-success">
                    <h2>Recebemos seu <em>pedido!</em></h2>
                    <p>
                        Entrarei em contato pelo {form.contato || "e-mail"} em até 3 dias úteis.<br />
                        Caso não receba, verifique a caixa de spam.
                    </p>
                </div>
            </>
        );
    }

    return (
        <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
            <style>{css}</style>

            <nav className="o360-nav" style={{ position: 'relative' }}>
                <Link to="/" className="o360-nav-logo">
                    <img src={logo} alt="Orlando 360 Logo" />
                </Link>
            </nav>

            {/* HERO */}
            <div className="orc-hero">
                <h1>
                    Vamos criar<br />
                    algo <em>incrível</em><br />
                    juntos?
                </h1>
                <div className="orc-hero-right">
                    <p>
                        Ao investir na criação de uma identidade visual estratégica, sua marca
                        passa a se comunicar de forma clara e consistente, gerando confiança e
                        lembrança no público.
                    </p>
                    <p className="star-note">
                        <strong>✶ Antes de te enviar um orçamento, preciso saber algumas informações
                            importantes sobre você e a sua marca</strong>, dessa forma posso te conhecer
                        melhor e criar um orçamento personalizado para você.
                    </p>
                    <p className="reply-note">
                        Entrarei em contato, pelo e-mail, em até 3 dias úteis, caso não receber,
                        verifique a caixa de spam.
                    </p>
                </div>
            </div>

            {/* FORM */}
            <form className="orc-form-wrap" onSubmit={handleSubmit}>

                {/* Text fields */}
                {[
                    { key: "nome", label: "Nome", ph: "" },
                    { key: "email", label: "Email", ph: "" },
                    { key: "telefone", label: "Telefone ou Whatsapp ( + País (DDD) Número )", ph: "" },
                    { key: "empresa", label: "Nome da Empresa", ph: "" },
                ].map(f => (
                    <div className="orc-field" key={f.key}>
                        <label>{f.label}</label>
                        <input
                            type="text"
                            placeholder={f.ph}
                            value={form[f.key]}
                            onChange={e => set(f.key, e.target.value)}
                        />
                    </div>
                ))}



                {/* Papelaria checkboxes */}
                <div className="orc-checkbox-section">
                    <div className="orc-checkbox-section-label">
                        Quais os itens de papelaria importantes para o seu negócio?
                        <span className="req">*</span>
                    </div>
                    <div className="orc-checkbox-grid">
                        {papelaria.map(item => (
                            <CheckItem
                                key={item}
                                label={item}
                                checked={papelariaSel.includes(item)}
                                onChange={() => toggleArr(papelariaSel, setPapelariaSel, item)}
                            />
                        ))}
                    </div>
                </div>

                {/* Prazo dropdown */}
                <Dropdown
                    label="Para quando você precisa desse projeto?"
                    placeholder="Para quando você precisa desse projeto?"
                    options={prazoOptions}
                    value={form.prazo}
                    onChange={v => set("prazo", v)}
                />



                <div className="orc-submit-row">
                    <button type="submit" className="orc-submit-btn">Enviar</button>
                </div>

            </form>
        </div>
    );
}
