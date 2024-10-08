import Carousel from "./components/carousel/Carousel";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import SubHero from "./components/hero/SubHero";
import Reviews from "./components/volunteer-section/Reviews";
import VolunteersNeeded from "./components/volunteer-section/VolunteersNeeded";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="hidden lg:block">
      <Hero />
      </div>
      <SubHero />
      <Carousel />
      <VolunteersNeeded />
      <Reviews />
    </main>
  );
}
