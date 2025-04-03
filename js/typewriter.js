// Typewriter effect for the PAC-MAN title
document.addEventListener("DOMContentLoaded", function() {
  let texto = "PAC-MAN Edición 40° Aniversario";
  let i = 0;
  
  function escribir() {
    if(i < texto.length) {
      document.getElementById("maquina").textContent += texto[i++];
      setTimeout(escribir, 100);
    }
  }
  
  escribir();
});