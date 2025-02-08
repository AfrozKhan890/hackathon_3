import HeroSection from "@/components/HeroSection";
import HeroTwo from "@/components/Herotwo";
import ShortSec from "@/components/ShortSec";
import NewArrivals from "@/components/NewArrivals";
import BlogSection from "@/components/BlogSection"
import Instasec from "@/components/Instasec"
import { getAllProducts } from "@/sanity/queries/FetchProduct";

export default async function Home() {
  const featuredData = await getAllProducts() || [];
  return (
    <div>
      <HeroSection />
      <HeroTwo />
      <ShortSec
        title="Top Picks for You"
        description="find a bright ideal to suit your taste with our great selection of suspension, floor and table lights"
        cardData={featuredData.reverse().slice(0, 4)}
              />
      <NewArrivals/>
      <BlogSection/>
      <Instasec/>

    </div>
  );
}
``