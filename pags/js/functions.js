function calculoAlturaLargura(idN1, idN2, idValue1, idResultado, tamanhoProduto, textoPersonalizado) {
    const n1 = parseFloat(document.getElementById(idN1).value);
    const n2 = parseFloat(document.getElementById(idN2).value);
    let valor1 = parseFloat(document.getElementById(idValue1).value);

    let media = n1 * n2;
    let result = Math.ceil(media / (tamanhoProduto));
    let valortotal = result * valor1;

    let cupomDesconto = 0;

    if (valortotal > 600) {
        cupomDesconto = 10;
    } else {
        cupomDesconto = 5;
    }

    let desconto = (cupomDesconto / 100) * valortotal;
    let valortotalComDesconto = valortotal - desconto;

    let valorTotalComDescontFormatado = valortotalComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let valorTotalFormatado = valortotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    

    let resultado = "Para compor a medida de " + n1 + "m x " + n2 + "m, será necessário " + result + " unidades de placas " + textoPersonalizado + "!" + "<br>" + "<br>"
        + "O valor total das " + result + " unidades é de " + valorTotalFormatado + ", porém, estou lhe disponibilizando um super cupom de desconto de " + cupomDesconto + "%, e o valor final será de " + valorTotalComDescontFormatado + "<br>" + "<br>"
        + "Caso tenha interesse, eu posso criar um anúncio personalizado com a quantidade necessária para seu local de aplicação, entretanto peço que nos informe o modelo desejado, o que acha?😉";

    document.getElementById(idResultado).innerHTML = resultado;
}

function calculoMetroQuadrado(idM1, idValue2, idResultado, tamanhoProduto, textoPersonalizado) {
    const m1 = parseFloat(document.getElementById(idM1).value);
    let valor1 = parseFloat(document.getElementById(idValue2).value);

    let result = Math.ceil(m1 / (tamanhoProduto));
    let valortotal = result * valor1;

    let cupomDesconto = 0;

    if (valortotal > 600) {
        cupomDesconto = 10;
    } else {
        cupomDesconto = 5;
    }

    let desconto = (cupomDesconto / 100) * valortotal;
    let valortotalComDesconto = valortotal - desconto;

    let valorTotalComDescontFormatado = valortotalComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let valorTotalFormatado = valortotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    let resultado = "Para compor a medida de " + m1 + "m², será necessário " + result + " unidades de placas " + textoPersonalizado + "!" + "<br>" + "<br>"
        + "O valor total das " + result + " unidades é de " + valorTotalFormatado + ", porém, estou lhe disponibilizando um super cupom de desconto de " + cupomDesconto + "%, e o valor final será de " + valorTotalComDescontFormatado + "<br>" + "<br>"
        + "Caso tenha interesse, eu posso criar um anúncio personalizado com a quantidade necessária para seu local de aplicação, entretanto peço que nos informe o modelo desejado, o que acha?😉";

    document.getElementById(idResultado).innerHTML = resultado;
}

function calculoDescontos (idN1, idresultado) {
    const valor = parseFloat(document.getElementById(idN1).value);

    if (valor > 600){
        cupomDesconto = 10;
    } else {
        cupomDesconto = 5;
    }

    let desconto = (cupomDesconto / 100) * valor;
    valorComDesconto = valor - desconto;
    
    let valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let valorDescontoFormatado = valorComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    let resultado = "O valor total será de " + valorFormatado + ", porém, posso lhe oferecer um super cupom de desconto de " + cupomDesconto + "%, e o valor final será de " + valorDescontoFormatado + "<br>" +
    "Caso tenha interesse, eu posso criar um anúncio com a quantidade necessária e enviar aqui no chat, oque acha?😁"
    
    document.getElementById(idresultado).innerHTML = resultado;
}

function calculoAlturaLarguraKit10(idN1, idN2, idResultado, tamanhoProduto) { 
    let n1 = parseFloat(document.getElementById(idN1).value);
    let n2 = parseFloat(document.getElementById(idN2).value);

    let media = n1 * n2;
    let result = media / (tamanhoProduto);

    let recomendado = "";

    if (result > 0 && result <= 10) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 1 kit com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 10 && result <= 20) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 2 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 20 && result <= 30) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 3 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 30 && result <= 40) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 4 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 40 && result <= 50) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 5 kit com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 50 && result <= 60) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 6 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 60 && result <= 70) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 7 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 70 && result <= 80) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 8 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 80 && result <= 90) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 9 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 90 && result <= 100) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 10 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 100 && result <= 110) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 11 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 110 && result <= 120) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 12 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 120 && result <= 130) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 13 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 130 && result <= 140) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 14 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 140 && result <= 150) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 15 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 150 && result <= 160) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 16 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 160 && result <= 170) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 17 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 170 && result <= 180) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 18 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 180 && result <= 190) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 19 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 190 && result <= 200) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 20 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 200 && result <= 210) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 21 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 210 && result <= 220) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 22 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 220 && result <= 230) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 23 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 230 && result <= 240) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 24 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 240 && result <= 250) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 25 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 250 && result <= 260) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 26 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 260 && result <= 270) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 27 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 270 && result <= 280) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 28 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 280 && result <= 290) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 29 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 290 && result <= 300) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 30 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 300 && result <= 310) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 31 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 310 && result <= 320) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 32 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 320 && result <= 330) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 33 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 330 && result <= 340) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 34 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 340 && result <= 350) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 35 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 350 && result <= 360) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 36 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 360 && result <= 370) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 37 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 370 && result <= 380) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 38 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 380 && result <= 390) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 39 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 390 && result <= 400) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 40 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 400 && result <= 410) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 41 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 410 && result <= 420) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 42 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 420 && result <= 430) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 43 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 430 && result <= 440) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 44 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 440 && result <= 450) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 45 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 450 && result <= 460) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 46 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 460 && result <= 470) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 47 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 470 && result <= 480) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 48 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 480 && result <= 490) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 49 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 490 && result <= 500) {
        recomendado = "Para medida de " + n1 + "m x " + n2 + "m recomendo que compre 50 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }


    document.getElementById(idResultado).innerHTML = recomendado;
}

function calculoMetroQuadradoKit10(idM1, idResultado, tamanhoProduto) {

    let m1 = parseFloat(document.getElementById(idM1).value);

    let result = m1 / (tamanhoProduto);

    let recomendado = "";

    if (result > 0 && result <= 10) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 1 kit com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 10 && result <= 20) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 2 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 20 && result <= 30) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 3 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 30 && result <= 40) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 4 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 40 && result <= 50) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 5 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 50 && result <= 60) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 6 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 60 && result <= 70) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 7 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 70 && result <= 80) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 8 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 80 && result <= 90) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 9 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 90 && result <= 100) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 10 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 100 && result <= 110) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 11 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 110 && result <= 120) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 12 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 120 && result <= 130) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 13 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 130 && result <= 140) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 14 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 140 && result <= 150) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 15 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 150 && result <= 160) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 16 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 160 && result <= 170) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 17 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 170 && result <= 180) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 18 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 180 && result <= 190) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 19 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 190 && result <= 200) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 20 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 200 && result <= 210) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 21 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 210 && result <= 220) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 22 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 220 && result <= 230) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 23 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 230 && result <= 240) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 24 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 240 && result <= 250) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 25 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 250 && result <= 260) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 26 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 260 && result <= 270) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 27 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 270 && result <= 280) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 28 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 280 && result <= 290) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 29 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 290 && result <= 300) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 30 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 300 && result <= 310) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 31 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 310 && result <= 320) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 32 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 320 && result <= 330) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 33 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 330 && result <= 340) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 34 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 340 && result <= 350) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 35 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 350 && result <= 360) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 36 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 360 && result <= 370) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 37 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 370 && result <= 380) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 38 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 380 && result <= 390) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 39 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 390 && result <= 400) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 40 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 400 && result <= 410) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 41 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 410 && result <= 420) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 42 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 420 && result <= 430) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 43 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 430 && result <= 440) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 44 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 440 && result <= 450) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 45 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 450 && result <= 460) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 46 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 460 && result <= 470) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 47 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 470 && result <= 480) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 48 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 480 && result <= 490) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 49 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }
    if (result > 490 && result <= 500) {
        recomendado = "Para medida de " + m1 + "m² recomendo que compre 50 kits com 10 unidades!!!" + "<br>" + "<br>"
            + "Segue nosso kit com 10 unidades👇";
    }


    document.getElementById(idResultado).innerHTML = recomendado;
}