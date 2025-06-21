import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Pricing />
      <Contact />
    </Layout>
  );
}
