import HeroSection from "./HeroSection";
import heroSection from './heroSection.module.css'

export default function HomePage() {
    return (
        <>
            <section className={`h-screen relative w-full flex justify-center items-center`}>
                <div className={`${heroSection.Background} background z-1 inset-0 absolute`} ></div>
                <HeroSection />
            </section>
        </>
    )
}