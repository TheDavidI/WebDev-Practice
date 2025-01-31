const { parentPort } = require("node:worker_threads");

// Работникът получава число, изчислява квадрата му и го връща обратно.
parentPort.on("message", (number) => {
    const result = number * number;
    parentPort.postMessage(result);
});