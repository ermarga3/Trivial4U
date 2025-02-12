document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("casillas-container");
    const colores = ["rojo", "naranja", "amarillo", "verde", "azul", "rosa"]; // Orden cíclico
    const totalCasillas = 30; // 5 de cada color
    const casillas = [];
    const radio = 215; // Distancia desde el centro
    const centroX = 258; // Centro del tablero (mitad de 500px)
    const centroY = 258;

    for (let i = 0; i < totalCasillas; i++) {
        const color = colores[i % colores.length]; // Alternar colores en orden
        const angle = (i * 360 / totalCasillas) * (Math.PI / 180); // Convertir grados a radianes

        // Calcular coordenadas de la casilla
        const x = centroX + Math.cos(angle) * radio - 30; // -30 para centrar la casilla
        const y = centroY + Math.sin(angle) * radio - 30;

        // Crear la casilla
        const casilla = document.createElement("div");
        casilla.classList.add("casilla", color);
        casilla.style.left = `${x}px`;
        casilla.style.top = `${y}px`;
        

        container.appendChild(casilla);
    }
});