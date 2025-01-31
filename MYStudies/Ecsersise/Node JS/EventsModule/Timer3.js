const EventEmitter = require("events");

class Timer extends EventEmitter {
    StartTimer(duration) {
        this.emit("start", duration);
        let remainingTime = duration;

        const interval = setInterval(() => {
            remainingTime--;
            this.emit("tick", remainingTime);

            if  (remainingTime <= 0) {
                clearInterval(interval);
                this.emit("end");
            }
        }, 1500);
    }
}
module.exports = Timer;