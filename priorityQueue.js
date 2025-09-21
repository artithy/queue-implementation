let priorityQueue = [];

function enqueue(value, priority) {
    let newItem = { value, priority };
    let inserted = false;

    for (let i = 0; i < priorityQueue.length; i++) {
        if (priority < priorityQueue[i].priority) {
            priorityQueue.splice(i, 0, newItem);
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        priorityQueue.push(newItem);
    }

    console.log(`After adding (${value}, p=${priority}), queue is:`, priorityQueue);
}

function dequeue() {
    if (priorityQueue.length === 0) {
        console.log("Queue Underflow");
        return;
    }
    let removed = priorityQueue.shift();
    console.log("After removing", removed, "queue is:", priorityQueue);
    return removed;
}

function front() {
    return priorityQueue.length > 0 ? priorityQueue[0] : null;
}

function rear() {
    return priorityQueue.length > 0 ? priorityQueue[priorityQueue.length - 1] : null;
}

function isEmpty() {
    return priorityQueue.length === 0;
}

enqueue("task1", 2);
enqueue("task2", 1);
enqueue("task3", 3);
console.log("Front:", front());
console.log("Rear:", rear());
dequeue();
console.log("Front after dequeue:", front());
