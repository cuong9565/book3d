import HeroSection from "@/components/home/HeroSection"
import ContinueReading from "@/components/home/ContinueReading"
import WhyEdu3D from "@/components/home/WhyEdu3D"

export default function HomePage(){
    return (
        <main className="">
            <HeroSection />
            <ContinueReading />
            <WhyEdu3D />
        </main>
    );
}