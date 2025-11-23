// Archivo testimonial: memoria viva de cada acto ceremonial.

const testimonios = [];

function registrarTestimonio(evento) {
  testimonios.push({ evento, fecha: new Date().toLocaleString() });
  console.log(`Testimonio registrado: ${evento}`);
}

function obtenerTestimonios() {
  return testimonios;
}

export { registrarTestimonio, obtenerTestimonios };
// memoriaviva.js
const memoriaViva = [];

function agregarTestimonio(frase) {
  memoriaViva.push(frase);
  mostrarTestimonios();
}

function mostrarTestimonios() {
  const salida = document.getElementById("salida");
  salida.innerHTML = memoriaViva.map(t => `<p>🌟 ${t}</p>`).join("");
}

// Cada vez que se pulse el botón, se guarda un testimonio
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-activar");
  boton.addEventListener("click", () => {
    const fecha = new Date().toLocaleString("es-MX");
    agregarTestimonio(`Andrew fue invocado el ${fecha}`);
  });
});
