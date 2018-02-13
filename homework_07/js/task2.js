window.onload = function() {
    var quit = false;
    while(!quit){
        if (confirm("Do you want to play a game?")){
            playGame(1,0);
        }
        else {
            alert("You did not become a millionaire");
            quit = true;
        }
    }  
}
function playGame(xLevel,xtotal) {
    var result;
    var total = xtotal;
    var level = xLevel; 
    var prize;
    var tries =3;
    var max = 5;
    if(level>1) {
        max = max*level;
    }
    var randomNumber = Math.floor(Math.random() * max ) + 0;
    var isGameEnded = false;
    while(!isGameEnded){
        if(tries === 3){
            prize = 10;
        } 
        else if(tries === 2){
            prize = 5;
        }
        else if(tries === 1){
            prize = 2;
        }
        if(xLevel>1){
            prize = prize * Math.pow(3, level-1);
        }
        var guess = prompt('Choose a random number between 0 and ' + max + '.\nAttempts left:' + tries + '.\nTotal prize:' + total + '.\nPossible prize on current attempts: ' + prize);
        if(parseInt(guess) === randomNumber){
            alert('You guessed the number!');
            total = total + prize; 
            if(confirm('Do you want a continue?')) {
                result = playGame(level+1,total);
            } else {
                isGameEnded = true; 
            }
        }
        else{
            tries--;
            if(tries==0){
                total = 0;
                isGameEnded=true;
            }
        }
    }
    if(tries==0){
        console.log("Thank you for a game. Your prize is: " + total); 
    }
    result = total;
    return result;
}