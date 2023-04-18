function computerChoice(){
    const cmpChoic = ['Rock', 'Paper', 'Scissors']
    let rndmStr = cmpChoic[Math.floor(Math.random() * cmpChoic.length)];
    return rndmStr;
}
let rkBtn = document.getElementById('rkBtn')
rkBtn.addEventListener('click',game)
let pprBtn = document.getElementById('pprBtn')
pprBtn.addEventListener('click',game)
let scrBtn = document.getElementById('scrBtn')
scrBtn.addEventListener('click',game)


function game(e){
    console.log(e.target.id)
    function play(playerSelection, computerSelection){
        let playerScore = 0;
        let computerScore = 0;
        playerScore++;
        computerScore++;
        if(playerSelection === rkBtn){
            console.log('ROCK')
        }
}
}

       
//         if (playerSelection === 'Rock' && computerSelection === 'Rock'){
//             return "It's a tie: " + playerSelection + " and " + computerSelection + '. ' + playerScore + ':' + computerScore
            
//         } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
//             return 'Computer wins: ' + computerSelection + ' beats ' + playerSelection + '. ' + playerScore + ':' + computerScore++
//         } else if( playerSelection === 'Rock' && computerSelection === 'Scissors'){
//             return 'You win: '+ playerSelection + ' beats ' + computerSelection + '. ' + playerScore++ + ':' + computerScore
//         } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
//             return 'You win: '+ playerSelection + ' beats ' + computerSelection + '. ' + playerScore++ + ':' + computerScore
//         } else if(playerSelection === 'Paper' && computerSelection === 'Paper'){
//             return "It's a tie: " + playerSelection + " and " + computerSelection + '. ' + playerScore + ':' + computerScore
//         } else if( playerSelection === 'Paper' && computerSelection === 'Scissors'){
//             return 'Computer wins: ' + computerSelection + ' beats ' + playerSelection + '. ' + playerScore + ':' + computerScore++
//         } if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
//             return 'Computer wins: ' + computerSelection + ' beats ' + playerSelection + '. ' + playerScore + ':' + computerScore++
//         } else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
//             return 'You win: '+ playerSelection + ' beats ' + computerSelection + '. ' + playerScore++ + ':' + computerScore
//         } else if( playerSelection === 'Scissors' && computerSelection === 'Scissors'){
//             return "It's a tie: " + playerSelection + " and " + computerSelection + '. ' + playerScore + ':' + computerScore
//         }
// }
//                  playerSelection = prompt('Rock, Paper, or Scissors?')
//                  computerSelection = computerChoice()
//                 console.log(play(playerSelection, computerSelection))
//                 playerSelection = prompt('Rock, Paper, or Scissors?')
//                  computerSelection = computerChoice()
//                 console.log(play(playerSelection, computerSelection))
//                 playerSelection = prompt('Rock, Paper, or Scissors?')
//                  computerSelection = computerChoice()
//                 console.log(play(playerSelection, computerSelection))
//                 playerSelection = prompt('Rock, Paper, or Scissors?')
//                  computerSelection = computerChoice()
//                 console.log(play(playerSelection, computerSelection))

// console.log(game())
