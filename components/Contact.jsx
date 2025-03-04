"use client"; 

import React, { useState } from "react";
import styles from "./Contact.module.css"; 
import { validateForm } from "../validation/validateForm"

const Contact = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { formIsValid, newErrors } = validateForm(formData); 

    if (formIsValid) {
      alert("Message envoyé avec succès!");
      console.log("Données du formulaire:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
