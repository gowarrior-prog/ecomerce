import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';

export default function Home() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <Hero />
      <FeaturedProducts />
    </main>
  );
}