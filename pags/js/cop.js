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