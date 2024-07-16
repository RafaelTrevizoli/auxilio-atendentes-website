function adicionarMedida() {
    var container = document.getElementById("medidasContainer");

    for (var i = 0; i < 2; i++) { 
        var div = document.createElement("div");
        div.className = "form";

        var label = document.createElement("label");
        label.innerHTML = "Digite a próxima medida em (m): ";

        var input = document.createElement("input");
        input.type = "number";
        input.name = "s" + (container.childElementCount + 1);
        input.id = "s" + (container.childElementCount + 1);
        input.step = "0.01";

        div.appendChild(label);
        div.appendChild(input);
        container.appendChild(div);
    }
}

document.getElementById("adicionarMedida").addEventListener("click", adicionarMedida);
document.getElementById("calcular3").addEventListener("click", calcularMedidas);
