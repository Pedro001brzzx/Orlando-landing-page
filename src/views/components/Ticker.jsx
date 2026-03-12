export function Ticker() {
    const words = ["BRAND DESIGN", "·", "IDENTIDADE VISUAL", "·", "ORLANDO 360", "·", "BRANDING ESTRATÉGICO", "·", "DIREÇÃO DE ARTE", "·"];
    const doubled = [...words, ...words, ...words];
    return (
        <div className="o360-ticker">
            <div className="o360-ticker-inner">
                {doubled.map((w, i) => <span key={i}>{w}</span>)}
            </div>
        </div>
    );
}
