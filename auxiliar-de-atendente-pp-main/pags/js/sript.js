ocument.getElementById('calcular').addEventListener('click', function () {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var valor1 = parseFloat(document.getElementById('value1').value);

    var media = n1 * n2;
    var result = Math.ceil(media / 0.0625);
    var valortotal = result * valor1;

    valortotal = valortotal.toFixed(2);

    var cupomDesconto = 0;

    if (valortotal > 600) {
        cupomDesconto = 10;
    } else {
        cupomDesconto = 5;
    }

    var desconto = (cupomDesconto / 100) * valortotal;
    var valortotalComDesconto = valortotal - desconto;

    valortotalComDesconto = valortotalComDesconto.toFixed(2);

    var resultado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre " + result + " unidades de placas 25x25cm !!!" + "<br>" + "<br>"
        + "O valor total das " + result + " unidades é de R$" + valortotal + ", Porém estou lhe disponibilizando um super cupom de desconto de " + cupomDesconto + "%, e o valor final será de R$" + valortotalComDesconto + "<br>" + "<br>"
        + "Caso queira, eu posso criar um anúncio personalizado com a quantidade necessária para seu local de aplicação, entretanto peço que nos envie o modelo desejado, o que acha?😉";

    document.getElementById('resultado').innerHTML = resultado;
});

document.getElementById('calcular2').addEventListener('click', function () {
    var m1 = parseFloat(document.getElementById('m1').value);
    var valor1 = parseFloat(document.getElementById('value2').value);

    var result = Math.ceil(m1 / 0.0625);
    var valortotal = result * valor1;

    valortotal = valortotal.toFixed(2);

    var cupomDesconto = 0;

    if (valortotal > 600) {
        cupomDesconto = 10;
    } else {
        cupomDesconto = 5;
    }

    var desconto = (cupomDesconto / 100) * valortotal;
    var valortotalComDesconto = valortotal - desconto;

    valortotalComDesconto = valortotalComDesconto.toFixed(2);

    var resultado = "Para medida de " + m1 + "m² recomendo que compre " + result + " unidades de placas 25x25cm !!!" + "<br>" + "<br>"
        + "O valor total das " + result + " unidades é de R$" + valortotal + ", Porém estou lhe disponibilizando um super cupom de desconto de " + cupomDesconto + "%, e o valor final será de R$" + valortotalComDesconto + "<br>" + "<br>"
        + "Caso queira, eu posso criar um anúncio personalizado com a quantidade necessária para seu local de aplicação, entretanto peço que nos envie o modelo desejado, o que acha?😉";

    document.getElementById('resultado').innerHTML = resultado;
});

const textoParaCopiar = document.getElementById('resultado');

const botaoCopiar = document.getElementById('botao');

botaoCopiar.addEventListener('click', () => {

    const texto = textoParaCopiar.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = texto;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Texto copiado para a área de transferência!');
});

function apagarMedidas() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

document.getElementById("apagarMedidas").addEventListener("click", apagarMedidas);

function apagarMedidas2() {
    document.getElementById("m1").value = "";
}

document.getElementById("apagarMedidas2").addEventListener("click", apagarMedidas2);