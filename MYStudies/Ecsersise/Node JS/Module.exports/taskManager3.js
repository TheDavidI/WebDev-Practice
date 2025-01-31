const tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Задачата "${task}" беше добавена!`);
}

function listTasks() {
    console.log("Текущи задачи:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

module.exports = {
    addTask,
    listTasks
};