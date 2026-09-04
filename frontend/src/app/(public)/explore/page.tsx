import HeroSection from "@/components/explore/HeroSection"
import FilterSection from "@/components/explore/FilterSection"
import BookGrid from "@/components/explore/BookGrid"

export default function ExplorePage(){
    return (
        <div className="">
            <HeroSection />
            <FilterSection />
            <BookGrid />
        </div>
    );
}