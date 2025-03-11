import TrainingPage from "@/components/TrainingPage";
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Kickboxing | Cours Sportifs',
  description: 'Apprenez les techniques de kickboxing tout en améliorant votre coordination, force, agilité et endurance grâce à des séances adaptées à tous les niveaux.'
}

export default function KickBoxing() {
  return (
    <TrainingPage
      title="Kickboxing"
      imageSrc="/kickBoxing.jpg"
      description="Apprenez les techniques de combat tout en vous défoulant, en améliorant votre coordination et en augmentant votre condition physique. Le kickboxing est un sport complet qui travaille l'ensemble du corps. Que vous soyez débutant ou avancé, vous bénéficierez d'un entraînement intensif qui vous permettra de développer votre force, votre agilité et votre endurance. Rejoignez-nous pour des sessions stimulantes et découvrez une méthode de remise en forme dynamique !"
    />
  );
}
