"use server"

import { validateForm } from "@/validation/validateForm";

export const handleFormSubmission = async (formData) => {
  const { formIsValid, newErrors } = validateForm(formData);

  if (!formIsValid) {
    return { errors: newErrors };
  }

  console.log("Données du formulaire reçues :", formData);


  return { message: "Message envoyé avec succès!" };
};
