import { Cursor } from "../components/Cursor";
import { Ticker } from "../components/Ticker";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Deliverables } from "../components/Deliverables";
import { Testimonials } from "../components/Testimonials";
import { Sobre } from "../components/Sobre";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <>
            <Cursor />
            <Ticker />
            <Nav />
            <Hero />
            <Portfolio />
            <div className="o360-divider" />
            <Deliverables />
            <div className="o360-divider" />
            <Testimonials />
            <Sobre />
            <CTA />
            <Footer />
        </>
    );
}
