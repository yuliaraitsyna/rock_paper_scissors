document.addEventListener("click", function() {
    function changeObject(option) {
        let object = document.getElementById("userObject");
        let computerObject = document.getElementById("computerObject");
        var randomNumber = Math.floor(Math.random() * 3) + 1;
        let computerMove;
        let userMove;
        let icon = document.getElementById("iconC");
        switch (randomNumber)
        {
            case 1:
                computerMove = 'Rock';
                icon.src = "img/rock.png";
                break;
            case 2:
                computerMove = 'Paper';
                icon.src = "img/paper.png";
                break;
            case 3:
                computerMove = 'Scissors';
                icon.src = "img/scissors.png";
                break;
            default:
                computerMove = '';
                icon.src = "img/rock-paper-scissors.png";
                break;
        }
        switch (option) {
            case 'Rock':
                object.innerHTML = 'Rock';
                userMove = 'Rock';
                break;
            case 'Paper':
                object.innerHTML = 'Paper';
                userMove = 'Paper';
                break;
            case 'Scissors':
                object.innerHTML = 'Scissors';
                userMove = 'Scissors';
                break;
            default:
                object.innerHTML = '';
                break;
        }
        switch (computerMove) {
            case 'Rock':
                computerObject.innerHTML = 'Rock';
                break;
            case 'Paper':
                computerObject.innerHTML = 'Paper';
                break;
            case 'Scissors':
                computerObject.innerHTML = 'Scissors';
                break;
            default:
                computerObject.innerHTML = '';
                break;
        }
        let status = document.getElementById("status");
        status.innerHTML = WinAlgorithm(userMove, computerMove);
    }

    document.getElementById("rock").addEventListener("click", function() {
        changeObject('Rock');
        ChangeButtonColor(this, "#f9429e");
        setTimeout(function(){
            ChangeButtonColor(this, "");
        }.bind(this),500);
    });

    document.getElementById("paper").addEventListener("click", function() {
        changeObject('Paper');
        ChangeButtonColor(this, "#f9429e");
        setTimeout(function(){
            ChangeButtonColor(this, "");
        }.bind(this),500);
    });

    document.getElementById("scissors").addEventListener("click", function() {
        changeObject('Scissors');
        ChangeButtonColor(this, "#f9429e");
        setTimeout(function(){
            ChangeButtonColor(this, "");
        }.bind(this),500);
    });

});

document.addEventListener("click", function() {
    function changeIcon(option) {
        let icon = document.getElementById("icon");
        switch(option)
        {
            case 'Rock':
                icon.src = "img/rock.png";
                break;
            case 'Paper':
                icon.src = 'img/paper.png';
                break;
            case 'Scissors':
                icon.src = 'img/scissors.png';
                break;
            default:
                icon.src = 'img/rock-paper-scissors.png';
                break; 
        }
    }
    document.getElementById("rock").addEventListener("click", function() {
        changeIcon('Rock');
    });
    document.getElementById("paper").addEventListener("click", function() {
        changeIcon('Paper');
    });
    document.getElementById("scissors").addEventListener("click", function() {
        changeIcon('Scissors');
    });
    
});

function WinAlgorithm(user, computer)
{
    if (user == 'Rock' && computer == 'Rock' || user == 'Paper' && computer == 'Paper' || user == 'Scissors' && computer == 'Scissors')
    {
        return 'Draw!';
    }
    else if (user == 'Rock' && computer == 'Scissors' || user == 'Paper' && computer == 'Rock' || user == 'Scissors' && computer == 'Paper')
    {
        return 'User wins!';
    }
    else{
        return 'Computer wins!';
    }
   
}

function ChangeButtonColor(button, color)
{
    button.style.backgroundColor = color;
}