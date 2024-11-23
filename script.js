const clockElement = document.getElementById('clock');
const selecttimezone = document.getElementById('timezone');
const localTimeZone = document.getElementById('localTimeZone')

function updateClock(){
    const now = new Date();
    const timezone2 = parseInt(selecttimezone.value, 10);
    const hours =  String((now.getUTCHours() + timezone2) % 24).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    
    
    
    // console.log(timezone2);

  

    localTimeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}




setInterval(updateClock, 1000);
selecttimezone.addEventListener('change', updateClock);



// const difference_time_UTC = new Date().getTimezoneOffset() / 60;
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// document.getElementById('clock2').textContent = timezone;

