import CareerTitle from "../CareerTitle";
import CarouselHero from "../CarouselHero";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="h-full w-full">
        <img
          src="https://paul-perez.vercel.app/yo2.webp"
          alt=""
          className="mask-b-from-90% mask-b-to-98% h-full object-cover mx-auto opacity-80"
        />
      </div>
      <p className="absolute z-0 top-1/3 right-1/12 text-titles text-3xl font-orbitron font-bold">Ubicado en <br /> Lima</p>
      <CareerTitle />
      <CarouselHero />
    </section>
  );
}
