function desenharCanvas(){
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.fillRect(0,0,1200,800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(900,500);
    tabuleiro.lineTo(650, 500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharLinhas(){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(500+(largura*i), 640);
        tabuleiro.lineTo(550+(largura*i), 640);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function escreverLetraCorreta(index){
    tabuleiro.font = "bold 52px Fira Code";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6
   
    let largura = 600/palavraSecreta.length

    tabuleiro.fillText(palavraSecreta[index], 508 + (largura * index),620)
}

function escreverLetraIncorreta(letra, erros){
    tabuleiro.font = "bold 40px Fira Code";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6

    tabuleiro.fillText(letra,520 + (40 *(10 - erros)),720,40)
}

function desenharForca(pontos) {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";

    if(pontos===8){
        tabuleiro.moveTo(700,500);
        tabuleiro.lineTo(700,100);
    }

    if(pontos===7){
        tabuleiro.moveTo(850,100);
        tabuleiro.lineTo(700,100);
    }

    if(pontos===6){
        tabuleiro.moveTo(850,100);
        tabuleiro.lineTo(850,171);
    }

    if(pontos===5){
        tabuleiro.moveTo(900,230);
        tabuleiro.arc(850,230,50,0,Math.PI*2);
    }

    if(pontos===4){
        tabuleiro.moveTo(850,389);
        tabuleiro.lineTo(850,289);
    }

    if(pontos===3){
        tabuleiro.moveTo(850,389);
        tabuleiro.lineTo(800,450);
    }

    if(pontos===2){
        tabuleiro.moveTo(850,389);
        tabuleiro.lineTo(890,450);
    }

    if(pontos===1){
        tabuleiro.moveTo(850,330);
        tabuleiro.lineTo(800,389);
    }

    if(pontos===0){
        tabuleiro.moveTo(850,330);
        tabuleiro.lineTo(890,389);
    }

        tabuleiro.stroke();
        tabuleiro.closePath();
}

function vitoriaAparece() {
    tabuleiro.font = "bold 42px Fira Code";
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "green";
    tabuleiro.fillText("Ganhou,",950,320);
    tabuleiro.fillText("Parabéns!",930,360);
    setTimeout(recarregar, 1500);
}

function derrotaAparece() {
    tabuleiro.font = "bold 35px Fira Code";
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "red";
    tabuleiro.fillText("Fim de jogo!",950,320);
    tabuleiro.fillText("Reinicie!",950,360);
}
  
function recarregar() {
    location.reload(); 
}