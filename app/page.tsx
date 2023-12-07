import Hero from "@/components/Hero";
import Image from "next/image";

import { services } from "@constants";
import { ServiceCard } from "@components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Our Services</h1>
          <p>Explore the our services you might like</p>
        </div>
        <div className="home__filters">
          <div className="home__filter-container"></div>
        </div>
        <section>
          <div className="home__cars-wrapper">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                links={service.links}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
