const EventEmitter = require("events");

class Timer extends EventEmitter {
    StartTimer(name, seconds) {
        console.log(`Таймерът "${name}" започна за ${seconds} секунди.`);
    setTimeout(() => {
        this.emit("timerFinished", name);
      }, seconds * 1000);
    }
}
module.exports = Timer;