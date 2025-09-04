function contagemFor() {
    let numero, contador, mensagem = "CONTAGEM COM FOR\n";

    numero = parseInt(prompt("Contagem até 500, digite um número qualquer menor que 500 e eu direi se é par ou impar. "))

    for (contador = numero; contador <= 500; contador++) {
        mensagem = mensagem + contador;
        if (contador % 2 == 0) {
            mensagem = mensagem + " - PAR\n";
        } else {
            mensagem = mensagem + " - ÍMPAR\n";
        }
    }
    alert(mensagem);
}

function contagemWhile() {
    let numero, contador, mensagem = "CONTAGEM COM WHILE\n";

    numero = parseInt(prompt("Contagem até 500, digite um número qualquer menor que 500 e eu direi se é par ou impar. "))

    contador = numero;

    while (contador <= 500) {
        if (contador % 2 == 0) {
            mensagem = mensagem + contador + " - PAR\n";
        } 
        else {
            mensagem = mensagem + contador + " - ÍMPAR\n";
        }
        contador = contador + 1;
    }
    alert(mensagem);
}

function contagemDo() {
    let numero, contador, mensagem = "CONTAGEM COM DO WHILE\n"

    numero = parseInt(prompt("Contagem até 500, digite um número qualquer menor que 500 e eu direi se é par ou impar. "))

    contador = numero;
    
     do {
        if (contador % 2 == 0) {
            mensagem = mensagem + contador + " - PAR\n";
        } 
        else {
            mensagem = mensagem + contador + " - ÍMPAR\n";
        }
        contador = contador + 1;
    } while (contador<= 500);

    alert(mensagem);

}
function tabuadaFor() {
    let tabuada, contador, resultado, mensagem = "TABUÁDA COM FOR\n"

    tabuada= parseInt(prompt("Dígite uma tabuada que você deseja saber:"))


     for (contador = 0; contador <=10; contador++) {
        resultado = contador * tabuada;
        mensagem = mensagem + tabuada + " x " + contador + " = " + resultado + "\n"
        }
        
    alert(mensagem);
      
     
}
function caminhoFor() {
    let primeiro, segundo, mensagem = "CONTAGEM SIMPLES COM FOR\n", contador;

    alert("Vamos fazer uma brincadeira... \nDigite um número qualquer na mensagem a seguir e garanta que na segunda mensagem o número digitado será maior que o primeiro!😜");
    primeiro = parseInt(prompt("Digite um número qualquer:"));
    segundo = parseInt(prompt("Agora digite um número maior que o primeiro:"));

    // Validação para garantir que os números sejam válidos
    if (isNaN(primeiro) || isNaN(segundo)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (primeiro < segundo) {
        for (contador = primeiro; contador <= segundo; contador++) {
            if (contador === primeiro) {
                mensagem += contador + " - INÍCIO\n";
            } else if (contador === segundo) {
                mensagem += contador + " - FIM!\n";
            } else {
                mensagem += contador + "\n";
            }
        }
        alert(mensagem);
    } else {
        alert("Número inválido, o segundo número deve ser maior que o primeiro. Tente novamente!");
        return;
    }
}


