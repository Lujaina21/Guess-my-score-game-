'use strict'
 let secretNumber = Math.trunc(Math.random()*20)+1;
 let score = 20; //no. of tries
 let highscore = 0;
console.log(secretNumber);

// if user entered nothing
 // function displayMessage(msg){
 // document.querySelector('.message').textContent = 'welcome!';
 // } 
   document.querySelector('.again').addEventListener('click', function() { //ely hy7sal ama ados 3la again:the following
   document.querySelector('.score').textContent=20;
   document.querySelector('.highscore').textContent=0;
  //  document.querySelector('body').style.backgroundColor = 'linear-gradient(to right, #33ccff 0%, #ff99cc 127%)';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = ''; //m3naha en elvalue haykoon fady
   document.querySelector('.message').textContent='Start playing ;) ';
   secretNumber = Math.trunc(Math.random() * 20)+1;
  });

   document.querySelector('.check').addEventListener('click', function() {
   const guess = document.querySelector('.guess').value; //el user hyda5al value
   if(guess < 1 || guess > 20)
   {
    document.querySelector('.message').textContent='Invalid input :(';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
   }
  //  else if(!guess) {
  //     document.querySelector('.message').textContent='No number entered';
  //     document.querySelector('.number').textContent = '?';
  //   } 
   else if(guess==secretNumber){
     document.querySelector('.message').textContent='Correct Number';
     document.querySelector('.number').textContent=secretNumber;
     document.querySelector('body').style.backgroundColor= 'green';
     document.querySelector('.score').textContent=score;
     document.querySelector('.highscore').textContent=highscore;
     score--;
    }
    else if(guess<secretNumber){
   document.querySelector('.message').textContent='Too Low!';
  // document.querySelector('.number').textContent=secretNumber;
   document.querySelector('body').style.backgroundColor='red';
   document.querySelector('.score').textContent=score;
   document.querySelector('.highscore').textContent=highscore;
   score--;
    }
    else if(guess>secretNumber){
   document.querySelector('.message').textContent='Too High!';
  // document.querySelector('.number').textContent=secretNumber;
  document.querySelector('.score').textContent=score;
  document.querySelector('.highscore').textContent=highscore;
   score--;
    }
    else {
      document.querySelector('.message').textContent='You lost the ganme!';
      document.querySelector('.score').textContent=0 ;
      document.querySelector('.highscore').textContent=20;

  }
   })





















 
//   if(guess < 1 || guess > 20)
//    {
//      displayMessage('Invalid Input');
//    }
//    else if(guess == secretNumber) 
//    {
//        document.querySelector('.message').textContent='Correct Number';
//     //  displayMessage('Correct Number');
//      document.querySelector('.number').textContent = secretNumber;
//     //  document.body.style.backgroundColor = '#34CC17';
//       document.querySelector('body').style.backgroundColor = '#33cc33';

//       //  if(score > highscore) 
//       //  {
//       //    highscore = score;  ///???????????????????????
//       //    document.querySelector('.highscore').textContent = highscore ;
//       //  }
//    } 
//    else if (guess !== secretNumber){
//        if(score> 1)
//        {
//            if(guess>secretNumber){
//                document.querySelector('.message').textContent='Too High!' ;
//                document.querySelector('.score').textContent=score ;
//              score++; }
//              else if (guess<secretNumber) {
//                document.querySelector('.message').textContent='Too Low!' ;
//                document.querySelector('.score').textContent=score ;
//              score-- ;
//            }
//            else {
//                document.querySelector('.message').textContent='You lost the ganme!';
//                document.querySelector('.score').textContent=0 ;
//            }
//        };
//     //    if(score > 1)
// //       {
// //        displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
// //        score--;
// //        document.querySelector('.score').textContent = score;
// //       }
// //       else 
// //       {
// //        displayMessage('You lost the game!');
// //        document.querySelector('.score').textContent=0;
// //       });