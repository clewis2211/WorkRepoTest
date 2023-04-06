let p = document.createElement('p');
p.textContent = 'Hello World'








// console.log(2+2)
// console.log((4+6+9)/77)
// let a = 10
// console.log(a)
// let b = 7 * a 
// console.log(b)
// const max = 57
// const actual = max -13
// const percentage = actual / max
// console.log(percentage)


// number = Number(prompt('enter any number'));

// function numberChoice(){
//     if(number === 6){
//         return true
//     } else if(number === 10 || number > 10){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(numberChoice())

// a = 1 + 8
// b = 22 * 3
// c = 5 % 4
// d = a - 17
// e = a + b + c + d 

// console.log(a, b, c, d, e)

// let birthYear = 1992
// let thisYear = 2023
// let firstName = "Carlton "
// let lastName = " Lewis"
// let greeting = "Hello my name is "  + firstName + " " + lastName + " " + " and I am " + (thisYear - birthYear) + ' years old!'

// console.log(greeting)


// let number = parseInt(prompt('Enter any number'));

// for (let i = 1; i<= number; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz') 
//     } else if (i % 3 === 0){
//         console.log('Fizz')
//     } else if(i % 5 === 0){
//         console.log('Buzz')
//     }else {
//         console.log(i)
//     }
// }
// const computerChoice = ['Rock', 'Paper', 'Scissors']

// console.log(computerChoice())

// function play(playerSelection, computerSelection){

//         if (playerSelection === 'Rock' && computerSelection === 'Rock'){
//             return "It's a tie: " + playerSelection + " and " + computerSelection 
//         } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
//             return 'Computer wins: ' + computerSelection + ' beats ' + playerSelection
//         } else if( playerSelection === 'Rock' && computerSelection === 'Scissors'){
//             return 'You win: '+ playerSelection + ' beats ' + computerSelection
//         } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
//             return 'You win: '+ playerSelection + ' beats ' + computerSelection
//         } else if(playerSelection === 'Paper' && computerSelection === 'Paper'){
//             return "It's a tie: " + playerSelection + " " + computerSelection
//         } else if( playerSelection === 'Paper' && computerSelection === 'Scissors'){
//             return 'Computer wins: ' + computerSelection + ' beats ' + playerSelection
//         } if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
//             return 'Computer wins: ' + computerSelection + ' beats ' + playerSelection 
//         } else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
//             return 'You win: '+ playerSelection + ' beats ' + computerSelection
//         } else if( playerSelection === 'Scissors' && computerSelection === 'Scissors'){
//             return "It's a tie: " + playerSelection + " " + computerSelection 
//         }
// }

//         let playerSelection = prompt('Rock, Paper, or Scissors?')
//         let computerSelection = computerChoice()

// console.log(play(playerSelection, computerSelection))














// function computerChoice(){
//     const cmpChoic = ['Rock', 'Paper', 'Scissors']
//     let rndmStr = cmpChoic[Math.floor(Math.random() * cmpChoic.length)];
//     return rndmStr;
// }
// function game(){
//     function play(playerSelection, computerSelection){
//         let playerScore = 0;
//         let computerScore = 0;
//         playerScore++;
//         computerScore++;

       
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
// }

// console.log(game())
