const { parentPort, workerData } = require("node:worker_threads");

// Получаване на данните от основния файл (workerData)
const number = workerData;

// Извършване на операция (пример: умножение по 2)
const result = number * 2;

// Изпращане на резултата обратно към основния файл
parentPort.postMessage(result);
