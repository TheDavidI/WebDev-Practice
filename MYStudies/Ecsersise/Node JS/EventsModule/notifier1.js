const EventEmitter = require("node:events");

class Notifier extends EventEmitter {
    constructor() {
        super();
    }
    onLogin(user) {
        this.emit("login", user);    
    }
    onLogout(user) {
        this.emit("logout", user);
    }
}
module.exports = new Notifier();