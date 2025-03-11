import TrainingPage from "@/components/TrainingPage";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'CrossFit | Cours Sportifs',
  description: 'Rejoignez nos entraînements de CrossFit pour améliorer votre force, endurance, agilité et mobilité, avec des séances adaptées à tous les niveaux et un encadrement professionnel.'
}
export default function CrossFit() {
  return (
    <TrainingPage
      title="CrossFit"
      imageSrc="/crossFit.jpg"
      description="Nos entraînements de CrossFit sont conçus pour améliorer votre condition physique globale grâce à une combinaison d'exercices fonctionnels, variés et exécutés à haute intensité. Vous travaillerez votre force, votre endurance, votre agilité et votre mobilité à travers des séances adaptées à tous les niveaux. Encadré par des coachs expérimentés, vous serez guidé pour repousser vos limites et progresser en toute sécurité. Rejoignez une communauté passionnée où chaque effort compte et où l'entraide est essentielle pour atteindre vos objectifs."
    />
  );
}
