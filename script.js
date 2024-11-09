function updateClock(){
    const now = new Date();
    const hours =  String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

function updateClock_timezone(){
    const now = new Date();
    const selectedTimezone = -5; //New York
    const hours =  String(now.getHours()-1+selectedTimezone).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('timezone').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock_timezone, 1000);