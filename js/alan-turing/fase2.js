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

        console.log(resposta);
        console.log(valida);

        if (valida) {

            if (resposta == 'b') {

                alert('Você fez a escolha certa!');
                break;

            } else {

                alert('Escolha errada tente mais uma vez!');
                count++
            }

            if (count > 3) {
                alert('Game Over!');
                break
            };

        } else {
            alert('resposta inválida!');
        };
    };
};