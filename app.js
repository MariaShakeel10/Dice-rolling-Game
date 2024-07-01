ludoDice = ()=>{
const play1 = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice1").setAttribute("src", `images/dice${play1}.png`);

const play2 =Math.floor(Math.random()*6)+1;
const diceTwo =`images/dice${play2}.png`
document.getElementById("dice2").setAttribute('src',diceTwo)

if (play1>play2) {
    document.getElementById("mytext").innerHTML = "Player 1 wins";
}else if (play1<play2) {
    document.getElementById("mytext").innerHTML="Player 2 wins";
} else {
    document.getElementById("mytext").innerHTML="Draw";
}
}

