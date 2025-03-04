export const validateForm = (formData) => {
    const newErrors = {};
    let formIsValid = true;
  
    if (!formData.name) {
      newErrors.name = "Le nom est requis.";
      formIsValid = false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "L'email est requis et doit être valide.";
      formIsValid = false;
    }
  
    if (!formData.message) {
      newErrors.message = "Le message est requis.";
      formIsValid = false;
    }
  
    return { formIsValid, newErrors };
  };
  