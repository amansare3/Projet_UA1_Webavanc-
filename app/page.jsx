import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Slogan from "@/components/Slogan";
import "./page.module.css";
/**
 * Métadonnées pour la page d'accueil
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Accueil | Cours Sportifs',
  description: 'Bienvenue sur notre site de cours sportifs ! Découvrez nos programmes de musculation, kickboxing, CrossFit, et entraînements personnalisés pour atteindre vos objectifs de fitness.'
}
//Fonction représentant la page d'accueil.
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
