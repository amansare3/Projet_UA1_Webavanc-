import TrainingPage from "@/components/TrainingPage";
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Personal Training | Fitness Courses',
  description: 'Achieve your fitness goals with personalized coaching in Boxing, Powerlifting, Bodybuilding, and Athlete Training, guided by expert trainers.'
}

export default function PersonalTraining() {
  return (
    <TrainingPage
      title="Personal Training"
      imageSrc="/PersonalTIntro.jpg"
      description="Our Personal Training programs are designed to help you achieve your fitness goals with expert guidance. Whether you're looking to improve strength, build muscle, or enhance athletic performance, we offer tailored sessions in Boxing, Powerlifting, Bodybuilding, and Athlete Training. Our experienced trainers create personalized workout plans, providing the support and motivation you need to reach your full potential. Get ready to take your fitness journey to the next level with focused, one-on-one coaching!"
    />
  );
}
