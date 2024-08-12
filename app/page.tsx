import Carousel from "./components/carousel/Carousel";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import SubHero from "./components/SubHero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SubHero />
      <Carousel />
    </main>
  );
}
