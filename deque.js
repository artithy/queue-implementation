let deque = [];

function insertFront(value) {
    deque.unshift(value);
    console.log("After inserting at front:", value, "Deque is:", deque);
}

function insertRear(value) {
    deque.push(value);
    console.log("After inserting at rear:", value, "Deque is:", deque);
}

function deleteFront() {
    if (deque.length === 0) {
        console.log("Deque Underflow - nothing to delete from front");
        return null;
    }
    let removed = deque.shift();
    console.log("After deleting from front:", removed, "Deque is:", deque);
    return removed;
}

function deleteRear() {
    if (deque.length === 0) {
        console.log("Deque Underflow - nothing to delete from rear");
        return null;
    }
    let removed = deque.pop();
    console.log("After deleting from rear:", removed, "Deque is:", deque);
    return removed;
}

function front() {
    return deque.length > 0 ? deque[0] : null;
}

function rear() {
    return deque.length > 0 ? deque[deque.length - 1] : null;
}

insertRear(10);
insertRear(20);
insertFront(5);
insertFront(2);

console.log("Front:", front(), "Rear:", rear());

deleteFront();
deleteRear();

console.log("Final Deque:", deque);
