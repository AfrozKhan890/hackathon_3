import HeroSection from "@/components/HeroSection";
import HeroTwo from "@/components/Herotwo";
import ShortSec from "@/components/ShortSec";
import NewArrivals from "@/components/NewArrivals";
import BlogSection from "@/components/BlogSection"
import Instasec from "@/components/Instasec"
import { getFeaturedProduct } from "@/sanity/queries/FetchProduct";


export default async function Home() {
  const featuredData = await getFeaturedProduct() || [];
  return (
    <div>
      <HeroSection />
      <HeroTwo />
      <ShortSec
        title="Top Picks for You"
        description="find a bright ideal to suit your taste with our great selection of suspension, floor and table lights"
        cardData={featuredData}
      />
      <NewArrivals/>
      <BlogSection/>
      <Instasec/>

    </div>
  );
}
``