const malla = {
  "Primer Ciclo": [...],
  "Segundo Ciclo": [...],
  "Tercer Ciclo": [...],
  "Cuarto Ciclo": [...],
  "Quinto Ciclo": [...],
  "Sexto Ciclo": [...],
  "Séptimo Ciclo": [...],
  "Octavo Ciclo": [...],
  "Orientación Quirúrgica": [...],
  "Área de Formación Optativa Abierta": [...]
};

// ⬆️ Aquí van los arrays completos como los que te mostré antes. Si lo deseas, te los puedo mandar completos en un archivo.

const contenedor = document.getElementById("malla");

// Crear el filtro
const filtro = document.createElement("select");
filtro.innerHTML = `<option value="todos">Todos los ciclos</option>`;
Object.keys(malla).forEach((ciclo) => {
  const option = document.createElement("option");
  option.value = ciclo;
  option.textContent = ciclo;
  filtro.appendChild(option);
});
document.body.insertBefore(filtro, contenedor);

filtro.addEventListener("change", () => renderizarMalla(filtro.value));

// Mostrar la malla
function renderizarMalla(filtroCiclo) {
  contenedor.innerHTML = "";

  const ciclos = filtroCiclo === "todos" ? Object.keys(malla) : [filtroCiclo];

  ciclos.forEach((ciclo) => {
    const encabezado = document.createElement("h2");
    encabezado.textContent = ciclo;
    contenedor.appendChild(encabezado);

    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.gap = "10px";
    grid.style.marginBottom = "30px";

    malla[ciclo].forEach((materia) => {
      const card = document.createElement("div");
      card.className = "materia";
      card.innerHTML = `<strong>${materia.nombre}</strong><br>Créditos: ${materia.creditos}`;
      card.onclick = () => alert(
        `Materia: ${materia.nombre}\nCiclo: ${ciclo}\nCréditos: ${materia.creditos}\nPrerrequisito: ${materia.prerequisito}`
      );
      grid.appendChild(card);
    });

    contenedor.appendChild(grid);
  });
}

// Mostrar todos por defecto
renderizarMalla("todos");
