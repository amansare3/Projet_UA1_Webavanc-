import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Slogan from "@/components/Slogan";
import "./page.module.css";

export default function Acceuil() {
  return (
    <>
      <Header />
      <section>
        <Slogan />
        <div className="spacer"></div>
      </section>
      
      <section>
        <Section1 />
      </section>
    </>
  );
}
