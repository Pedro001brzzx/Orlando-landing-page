import { useEffect } from "react";
import GrokStarfield from "../components/GrokStarfield";
import { BrandingTicker } from "../components/BrandingTicker";
import { BrandingNav } from "../components/BrandingNav";
import { BrandingHero } from "../components/BrandingHero";
import { Portfolio } from "../components/Portfolio";
import { BrandingDeliverables } from "../components/BrandingDeliverables";
import { BrandingTestimonials } from "../components/BrandingTestimonials";
import { BrandingSobre } from "../components/BrandingSobre";
import { BrandingCTA } from "../components/BrandingCTA";
import { BrandingFooter } from "../components/BrandingFooter";

export default function Branding() {
    useEffect(() => {
        const prev = document.title;
        document.title = "Orlando 360 | Webdesign";
        return () => { document.title = prev; };
    }, []);

    return (
        <>
            <GrokStarfield />
            <BrandingTicker />
            <BrandingNav />
            <BrandingHero />
            <Portfolio
                imageOverrides={{ aura: ["/MOCKUP4.png", "/MOCKUP2.png"] }}
                imageStyles={{ aura: [
                    { transform: "scale(1.15)", transformOrigin: "center" },
                    { transform: "scale(1.45)", transformOrigin: "center" },
                ] }}
                labelOverrides={{ aura: { label: "Dr.Vieira", sub: "Design web Profissional" } }}
                linkOverrides={{ aura: "https://dr-paulo.vercel.app/" }}
            />
            <div className="o360-divider" />
            <BrandingDeliverables />
            <div className="o360-divider" />
            <BrandingTestimonials />
            <BrandingSobre />
            <BrandingCTA />
            <BrandingFooter />
        </>
    );
}
