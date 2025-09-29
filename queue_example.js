let queue = [];


function enqueue(customer) {
    queue.push(customer);
    console.log(customer, "added to queue:", queue);
}


function dequeue() {
    if (queue.length === 0) {
        console.log("Queue Underflow - no customer to serve");
        return null;
    }
    let served = queue.shift();
    console.log(served, "has been served. Queue now:", queue);
    return served;
}

function front() {
    return queue.length > 0 ? queue[0] : null;
}

function rear() {
    return queue.length > 0 ? queue[queue.length - 1] : null;
}


enqueue("Alice");
enqueue("Bob");
enqueue("Charlie");

dequeue();

enqueue("David");

console.log("Current Queue:", queue);
console.log("Front Customer:", front());
console.log("Rear Customer:", rear());
