const Notifier = require("./notifier1");

Notifier.on("login", (user) => {
    console.log(`Потребител ${user} влезе в системата.`);
}); 
Notifier.on("logout", (user) => {
    console.log(`Потребител ${user} излезе от системата.`);
});

Notifier.onLogin("Иван");
Notifier.onLogout("Мария");
Notifier.onLogin("Георги");