function initServerData(serverIp, serverPort){
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));


    function handleServerStatus(data) {
        if(data.status=='error'){
            console.log(data.error);
            return false;
        }
        const playerCounter = document.getElementById("player-countPixelmon");
        playerCounter.innerHTML = data.players.now;

        const playerMax = document.getElementById("playerMaxPixelmon");
        playerMax.innerHTML = data.players.max;

    }
}
initServerData("amp.playwithherro.com", "25597");