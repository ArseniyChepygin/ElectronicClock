function updateClock(time){
    const now = new Date();
    const hours =  String(now.getUTCHours() + time).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    
    const selecttimezone = document.getElementById("timezone");
    timezone2 = parseInt(selecttimezone.value, 10);
    console.log(timezone2);

    selecttimezone.addEventListener('change', updateClock(timezone2))
}


let timezone2 = 0;

setInterval(updateClock(timezone2), 1000);
updateClock(timezone2);



const difference_time_UTC = new Date().getTimezoneOffset() / 60;
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById('clock2').textContent = timezone;

