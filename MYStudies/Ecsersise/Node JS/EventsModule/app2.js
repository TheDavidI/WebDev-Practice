const Timer = require("./timer2");

const timer = new Timer();

timer.on("timerFinished", (name) => {
    console.log(`Таймерът "${name}" изтече!`);
});

timer.StartTimer("Таймер 1", 2);
timer.StartTimer("Таймер 2", 3);
timer.StartTimer("Таймер 3", 8);
timer.StartTimer("Таймер 4", 5);
timer.StartTimer("Таймер 5", 1);
timer.StartTimer("Таймер 6", 10);
