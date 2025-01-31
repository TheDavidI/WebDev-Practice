const { Worker } = require("node:worker_threads");

// Масив с числа за обработка
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 38, 37, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

// Функция за създаване на работник и обработка на дадено число
function processNumber(num, index) {
    return new Promise((resolve, reject) => {
        // Създаване на работник
        const worker = new Worker("./worker3.js", { workerData: num });

        // Слушане на съобщения от работника
        worker.on("message", (result) => {
            console.log(`Резултат от работник ${index + 1}: ${result}`);
            resolve(result);
        });

        // Обработване на грешки
        worker.on("error", (err) => {
            console.error(`Грешка от работник ${index + 1}:`, err);
            reject(err);
        });

        // Проверка за приключване на работника
        worker.on("exit", (code) => {
            if (code !== 0) {
                console.error(`Работник ${index + 1} приключи с грешка! Код: ${code}`);
            }
        });
    });
}

// Създаване на работници за всеки елемент от масива
async function main() {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        const result = await processNumber(array[i], i);
        results.push(result);
    }
    console.log("Всички резултати:", results);
}

// Стартиране на процеса
main();
