const { Worker } = require("worker_threads");

const numbers = [5, 7, 10, 12, 23, 56 ]; // Числата, за които ще изчисляваме факториел

// Функция, която създава Worker и връща Promise
function calculateFactorialInWorker(number) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./worker2.js", {
            workerData: number, // Изпращаме числото към worker
        });

        worker.on("message", (result) => resolve({ number, result })); // Получаваме резултата
        worker.on("error", reject); // Ако има грешка, я отчитаме
        worker.on("exit", (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

// Изчисляваме факториел за всички числа в масива
(async () => {
    try {
        const results = await Promise.all(numbers.map(calculateFactorialInWorker));

        // Сортираме резултатите във възходящ ред на числата
        results.sort((a, b) => a.number - b.number);

        // Показваме резултатите
        results.forEach(({ number, result }) => {
            console.log(`Factorial of ${number} is ${result}`);
        });
    } catch (err) {
        console.error("Error calculating factorial:", err);
    }
})();