let circularQueue = [];
let frontIndex = -1;
let rearIndex = -1;
let maxSize = 5;

function enqueue(value) {
    if ((frontIndex === 0 && rearIndex === maxSize - 1) || (rearIndex + 1 === frontIndex)) {
        console.log("Queue Overflow");
        return;
    }

    if (frontIndex === -1) {
        frontIndex = 0;
        rearIndex = 0;
    } else {
        rearIndex = (rearIndex + 1) % maxSize;
    }

    circularQueue[rearIndex] = value;
    console.log("After adding", value, "queue is:", circularQueue);
}

function dequeue() {
    if (frontIndex === -1) {
        console.log("Queue Underflow");
        return;
    }

    let removed = circularQueue[frontIndex];
    if (frontIndex === rearIndex) {
        frontIndex = -1;
        rearIndex = -1;
    } else {
        frontIndex = (frontIndex + 1) % maxSize;
    }
    console.log("After removing", removed, "queue is:", circularQueue);
    return removed;
}

function front() {
    if (frontIndex === -1) return null;
    return circularQueue[frontIndex];
}

function rear() {
    if (rearIndex === -1) return null;
    return circularQueue[rearIndex];
}

function isEmpty() {
    return frontIndex === -1;
}

function isFull() {
    return (frontIndex === 0 && rearIndex === maxSize - 1) || (rearIndex + 1 === frontIndex);
}

enqueue("a");
enqueue("b");
enqueue("c");
enqueue("d");
enqueue("e");

console.log("Front:", front(), "Rear:", rear());

dequeue();
dequeue();

enqueue("f");
enqueue("g");

console.log("Front:", front(), "Rear:", rear());
