setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes() / 60); //minute hand can gradually move around the clock
    const hourRatio = (minuteRatio + currentDate.getHours() / 12); // there are 12 hours on the clock

}