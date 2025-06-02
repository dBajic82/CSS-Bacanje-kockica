let dice1;
let dice2;
let dice3;
let dice4;
let dice5;
let dice6;

document.getElementById("rollBtn").onclick = () => {

    dice1 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice1").innerHTML = dice1;

    dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice2").innerHTML = dice2;

    dice3 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice3").innerHTML = dice3;

    dice4 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice4").innerHTML = dice4;

    dice5 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice5").innerHTML = dice5;

    dice6 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice6").innerHTML = dice6;

}
