"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css"; 
import { validateForm } from "../validation/validateForm"; 

const Contact = () => {
    // Définition de l'état du formulaire et des erreurs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); 
  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
 // Validation du formulaire
    const { formIsValid, newErrors } = validateForm(formData);

    if (formIsValid) {
      try {
        // Envoi des données du formulaire
        const response = await fetch("/api/envoye-formulaire", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Message envoyé avec succès!");
          setSuccessMessage("Votre message a été envoyé avec succès !"); 
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          //  réinitialiser le message de succès 
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          console.error("Erreur lors de l'envoi du message:", data.errors);
          setErrors(data.errors); 
        }
      } catch (error) {
        console.error("Erreur réseau:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.contactFormWrapper}>
      <div className={styles.contactForm}>
        <h2>Contactez-nous</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <button type="submit">Envoyer</button>

          {successMessage && (
            <div className={styles.successMessage}>
              <p>{successMessage}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
