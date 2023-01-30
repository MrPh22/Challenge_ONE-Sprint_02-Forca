let sectionAdcPalavra = document.getElementById("section-adcPalavra").style.display = "none";
let divBtnJogo = document.getElementById("btns-jogo").style.display = "none";

let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "LOGICA", "DESAFIO", "PROGRAMA"];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letras = [];
let erros = 8;
let letrasIncorretas = [];
let numeroDeErros = 8;
let letraEscolhida = [];

var palavraCorreta = "";

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra;
    console.log(palavraSecreta);
    return palavra;
}

function verificarLetraPressionada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
        letras.push(key);
        return false;
      } else {
        letras.push(key);
        return true;
      }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter) {
    if (palavraSecreta.indexOf(letter) <= 0){
        erros -= 1;
    }
}

function fimDeJogo(letra) {
    if (letraEscolhida.length < palavraSecreta.length) {
        letrasIncorretas.push(letra);

        if (letrasIncorretas.length > numeroDeErros) {
            derrotaAparece();
        } else if (letraEscolhida.length < palavraSecreta.length) {
            adicionarLetraIncorreta(letra);
            escreverLetraIncorreta(letra, erros);
        }
    }
}

function vitoria(letra) {
    letraEscolhida.push(letra.toUpperCase());
    if (letraEscolhida.length == palavraSecreta.length) {
        vitoriaAparece();
    }
}

function verificarLetraAlfabeto(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90){
        return true;
    } else {
        return false;
    }
}

function iniciarJogo() {
    document.getElementById('div-desaparece').style.display = "none";
    document.getElementById("btns-jogo").style.display = "flex";
    
    escolherPalavraSecreta();
    desenharCanvas();
    desenharLinhas();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if (letrasIncorretas.length <= numeroDeErros) {
            if (!verificarLetraPressionada(e.key) && verificarLetraAlfabeto(e.keyCode)) {
                if (palavraSecreta.includes(letra)) {
                    adicionarLetraCorreta(palavraSecreta.indexOf(letra))
                    for (let i = 0; i < palavraSecreta.length; i++) {
                        if (palavraSecreta[i] === letra) {
                            escreverLetraCorreta(i);
                            vitoria(letra);
                        }
                    }
                }
            else {
                if (!verificarLetraPressionada(e.key) && !verificarVencedor(letra)) return
                desenharForca(erros);
                fimDeJogo(letra);
                }
            }
        }
        else {
            alert("Fim de Jogo! Máximo de erros atingido");
        }
    }
}

function adcPalavra() {
    document.getElementById('div-desaparece').style.display = "none";
    document.getElementById("section-adcPalavra").style.display = "block";
}

function cancelar() {
    location.reload();
}

function salvar() {
    let palavraNova = document.getElementById("palvra_nova").value;
    if (palavraNova !== "") {
        palavras.push(palavraNova.toUpperCase());
        alert("A palavra digitada foi salva com sucesso!");
        document.getElementById("section-adcPalavra").style.display = "none";
        iniciarJogo();
    } else {
        alert("Digite uma palavra ou cancele essa ação!");
    }
}

function novoJogo() {
    location.reload();
}

function sair() {
    location.reload();
}