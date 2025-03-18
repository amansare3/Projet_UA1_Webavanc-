import { NextRequest, NextResponse } from "next/server";
import { validateForm } from "@/validation/validateForm"; 
/**
 * Fonction de gestion des requêtes POST pour la validation du formulaire.
 * @param {NextRequest} request
 */
export async function POST(request) {
  const formData = await request.json();
  
  console.log('Serveur'); 
  console.log(formData);  

  //Validation des données du formulaire
  const { formIsValid, newErrors } = validateForm(formData);

  if (!formIsValid) {
    return NextResponse.json({ errors: newErrors }, { status: 400 });
  }

  console.log("Données du formulaire reçues:", formData);

  return NextResponse.json({ message: "Message envoyé avec succès!" }, { status: 200 });
}
