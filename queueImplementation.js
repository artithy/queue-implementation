let queue = [];
let frontIndex = 0;
let rearIndex = -1;
let maxSize = 5;

function enqueue(value) {
    if (rearIndex >= maxSize - 1) {
        console.log("Queue Overflow");
    } else {
        rearIndex++;
        queue[rearIndex] = value;
        console.log("After adding", value, "queue is:", queue);
    }
}

function dequeue() {
    if (queue.length === 0) {
        console.log("Queue Underflow");
    } else {
        let removed = queue[0];
        for (let i = 1; i < queue.length; i++) {
            queue[i - 1] = queue[i];
        }
        queue.length--;
        rearIndex--;
        console.log("After removing", removed, "queue is:", queue);
        return removed;
    }
}

function front() {
    if (frontIndex > rearIndex) return null;
    return queue[frontIndex];
}

function rear() {
    if (frontIndex > rearIndex) return null;
    return queue[rearIndex];
}

function isEmpty() {
    return frontIndex > rearIndex;
}

function isFull() {
    return rearIndex >= maxSize - 1;
}

enqueue(5);
enqueue(10);
enqueue(15);

console.log("Front:", front(), "Rear:", rear());

dequeue();

enqueue(20);
enqueue(25);
enqueue(30);

enqueue(35);
