const Timer = require("./Timer3");

const timer = new Timer();

timer.on("start", (duration) => {
    console.log(`⏳ Таймер стартира за ${duration} секунди.`);
});
timer.on("tick", (remainingTime) => {
    console.log(`⏰ Оставащо време: ${remainingTime} секунди.`);
});
timer.on("end", () => {
    console.log("✅ Таймерът завърши!");
});
timer.StartTimer(125);