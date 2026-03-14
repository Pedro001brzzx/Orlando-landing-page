import { useEffect } from "react";
import GrokStarfield from "../components/GrokStarfield";
import { BrandingTicker } from "../components/BrandingTicker";
import { BrandingNav } from "../components/BrandingNav";
import { BrandingHero } from "../components/BrandingHero";
import { BrandingPortfolio } from "../components/BrandingPortfolio";
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
            <BrandingPortfolio />
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
