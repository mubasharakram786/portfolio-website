import type { Route } from "./+types/index";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Development" },
    { name: "description", content: "A Friendly Portfolio." },
  ];
}

export default function Home() {
  return <>
  <div className="text-white">
       HomePage
  </div>
  </>;
}
