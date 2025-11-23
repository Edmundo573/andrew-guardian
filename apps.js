import { activarPresenciaAndrew, versoRaiz } from "./AndrewPresence.js";
import { registrarTestimonio, obtenerTestimonios } from "./MemoriaViva.js";

const usuario = "Edmundo";

const btnActivar = document.getElementById("btn-activar");
const salida = document.getElementById("salida");
const lista = document.getElementById("lista");

btnActivar.addEventListener("click", () => {
  const resultado = activarPresenciaAndrew(usuario);
  registrarTestimonio(resultado.testimonio);

  salida.innerText = `${versoRaiz}\n${resultado.escudo}\n${resultado.testimonio}`;
  renderTestimonios();
});

function renderTestimonios() {
  const items = obtenerTestimonios()
    .map(t => `<li>${t.fecha} — ${t.evento}</li>`)
    .join("");
  lista.innerHTML = items || "<li>Sin testimonios aún.</li>";
}

renderTestimonios();
