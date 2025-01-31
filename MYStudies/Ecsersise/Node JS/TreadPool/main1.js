const { Worker } = require("node:worker_threads");

// Масив от числа за обработка
const numbers = [2, 3, 4, 5];

// Функция, която използва ThreadPool, за да изчисли квадратите
function calculateSquares(numbers) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedTasks = 0;

        numbers.forEach((number, index) => {
            const worker = new Worker("./worker1.js");
            
            // Изпращаме числото към работника
            worker.postMessage(number);
            
            // Получаваме резултата обратно
            worker.on("message", (square) => {
                results[index] = square;
                completedTasks++;

                // Ако всички задачи са завършени, връщаме резултата
                if (completedTasks === numbers.length) {
                    resolve(results);
                }
            });

            worker.on("error", reject);
        });
    });
}

// Изпълнение на функцията
calculateSquares(numbers)
    .then((results) => {
        console.log("Квадратите на числата:", results);
    })
    .catch((err) => {
        console.error("Грешка:", err);
    });