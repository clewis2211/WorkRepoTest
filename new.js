function computerPlay(){
    const computerArray = ['Rock', 'Paper', 'Scissors'];
    let item = computerArray[Math.floor(Math.random()*computerArray.length)]
    // console.log(item)
    return item;
}

let computerChoice = computerPlay();
let rkBtn = document.getElementById('rkBtn')
let pprBtn = document.getElementById('pprBtn')
let scrBtn = document.getElementById('scrBtn')
rkBtn.addEventListener('click',playeGame(rkBtn.id, computerChoice))
pprBtn.addEventListener('click',playeGame(pprBtn.id, computerChoice))
scrBtn.addEventListener('click',playeGame(scrBtn.id, computerChoice))

function playeGame(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection)
}