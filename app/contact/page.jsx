import Contact from "@/components/Contact";  

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Contact | Cours Sportifs',
  description: 'Contactez-nous pour en savoir plus sur nos cours de musculation, kickboxing, et autres activités sportives.'
}

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Contact /> 
    </div>
  );
}
