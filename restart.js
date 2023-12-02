let restart = document.getElementById("restart");

restart.addEventListener('click', function() {
    let user = document.getElementById("icon");
    let computer = document.getElementById("iconC");
    user.src = "img/rock-paper-scissors.png";
    computer.src = "img/rock-paper-scissors.png";
    let uObj = document.getElementById("userObject");
    let cObj = document.getElementById("computerObject");
    uObj.innerHTML = "";
    cObj.innerHTML = "";
});
