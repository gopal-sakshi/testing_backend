class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) { this.items[this.tailIndex] = item; this.tailIndex++; }
    dequeue() {
        const item = this.items[this.headIndex];                    // take this.items[0]
        delete this.items[this.headIndex];                          // delete this.items[0]
        this.headIndex++;                                           // increment headIndex... 
        return item;                                                // so, next time, you take this.items[1]
    }
    peek() { return this.items[this.headIndex]; }
    get length() { return this.tailIndex - this.headIndex; }
}
/***************************************************************************/
const queue = new Queue();
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(4);
console.log(queue.dequeue());
queue.peek();
queue.length;
/***************************************************************************/


// Queue operations
    // enqueue                  inserts an item at the tail of the queue
    // dequeue                  extracts the item at the head of the queue... next item becomes the head
    // peek                     reads the head of the queue, without altering the queue
    // length                   how many items the queue contains.

// Time complexity
    // All queue operations     =====>  O(1)
    //                                  no matter the size of the queue (10 or 1 million items)
    //                                  enqueue, dequeue, peek, length ===> must take same time


// this.items is an object here in this solution
    // access head/tail with headIndex
// we can also implement using array
    // but we have use array.shift() which is of O(n) complexity