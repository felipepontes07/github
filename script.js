function calcularConsumo() {
    var distanciaPercorrida = parseFloat(document.getElementById("distancia").value);
    var combustivelGasto = parseFloat(document.getElementById("combustivel").value);

    var consumo = distanciaPercorrida / combustivelGasto;

    document.getElementById("resultado").textContent = "Resultado: " + consumo.toFixed(2) + " Km/litros.";
}