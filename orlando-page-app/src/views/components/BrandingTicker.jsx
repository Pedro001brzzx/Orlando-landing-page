export function BrandingTicker() {
    const words = ["WEB DESIGN", "·", "LANDING PAGE", "·", "ORLANDO 360", "·", "ALTA CONVERSÃO", "·", "DESENVOLVIMENTO WEB", "·"];
    const doubled = [...words, ...words, ...words];
    return (
        <div className="o360-ticker">
            <div className="o360-ticker-inner">
                {doubled.map((w, i) => <span key={i}>{w}</span>)}
            </div>
        </div>
    );
}
