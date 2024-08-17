function initServerData(serverIp, serverPort){
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));


    function handleServerStatus(data) {
        if(data.status=='error'){
            console.log(data.error);
            return false;
        }
        const playerCounter = document.getElementById("player-countarchitect");
        playerCounter.innerHTML = data.players.now;

        const playerMax = document.getElementById("playerMaxarchitect");
        playerMax.innerHTML = data.players.max;

    }
}
initServerData("76.144.24.144", "25570");
