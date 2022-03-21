function validaResposta(resposta) {
    var count = 0;
    var respostas = ['a', 'b', 'c', 'd'];
    
    while (count < respostas.length) {
        if (resposta == respostas[count]) {
            return true;
        } else {
           count ++
        }
    }

    return false;
};

function main() {
    var count = 1;

    while (true) {
        var resposta = prompt('Digite sua resposta').toLowerCase();
        var valida = validaResposta(resposta);

        if (valida) {

            if (resposta == 'a') {

                alert('Você fez a escolha certa!');
                window.location.href ='fase3.html'
                break;

            } else {

                alert('Escolha errada tente mais uma vez!');
                count++
            }

            if (count > 3) {
                window.location.href = 'gameOver.html';
                break
            };

        } else {
            alert('resposta inválida!');
        };
    };
};