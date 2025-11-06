import type { Route } from "./+types/index";
import Hero from "~/components/Hero";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Development" },
    { name: "description", content: "A Friendly Portfolio." },
  ];
}

export default function Home() {
  return <section>
    <Hero/>
  </section>;
}
