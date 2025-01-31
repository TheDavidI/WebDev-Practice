const { workerData, parentPort } = require("worker_threads");

// Функция за изчисляване на факториел
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Изчисляваме факториела на числото, което сме получили от `workerData`
const result = factorial(workerData);

// Изпращаме резултата обратно към основния поток
parentPort.postMessage(result);