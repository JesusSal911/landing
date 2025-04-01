document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const contactForm = document.getElementById("contactForm");
  const ctaButtons = document.querySelectorAll(".cta-button");

  // Abrir modal al hacer clic en cualquier CTA
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });
  });

  // Cerrar modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del modal
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Manejar el envío del formulario
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores
    const userData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      date: new Date().toISOString(),
    };

    // Guardar en localStorage
    saveToLocalStorage(userData);

    // Mostrar confirmación
    alert(`¡Gracias ${userData.name}! Tus datos se han guardado.`);

    // Cerrar modal y resetear formulario
    modal.style.display = "none";
    contactForm.reset();
  });

  // Función para guardar en localStorage
  function saveToLocalStorage(data) {
    let leads = JSON.parse(localStorage.getItem("office365Leads")) || [];
    leads.push(data);
    localStorage.setItem("office365Leads", JSON.stringify(leads));

    console.log("Datos guardados:", data); // Para verificar en consola
  }
});
