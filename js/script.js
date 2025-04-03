document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const contactForm = document.getElementById("contactForm");
  const ctaButtons = document.querySelectorAll(".cta-button");
  
  // Galería de imágenes
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image img');
  
  // Funcionalidad de las miniaturas
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Actualizar imagen principal
      const imgSrc = this.querySelector('img').src;
      mainImage.src = imgSrc;
      
      // Actualizar clase activa
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      this.classList.add('active');
    });
  });

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

    // Crear mensaje para WhatsApp
    const mensaje = `Hola, soy ${userData.name}. Estoy interesado en el juego PAC-MAN Edición 40° Aniversario. ¿Podrían enviarme más información?`;
    const numeroWhatsApp = "953512111";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, "_blank");
  });

  // Función para guardar en localStorage
  function saveToLocalStorage(userData) {
    // Obtener datos existentes o inicializar array
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Añadir nuevo usuario
    users.push(userData);
    
    // Guardar en localStorage
    localStorage.setItem("users", JSON.stringify(users));
  }
});
