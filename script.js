const materias = [
  "Matemáticas I", "Física", "Química", "Biología", "Programación",
  "Matemáticas II", "Estadística", "Algoritmos", "Bases de Datos", "Sistemas"
];

const malla = document.getElementById("malla");

materias.forEach((materia) => {
  const div = document.createElement("div");
  div.className = "materia";
  div.textContent = materia;
  div.onclick = () => alert(`Haz seleccionado: ${materia}`);
  malla.appendChild(div);
});
