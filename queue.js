class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    peek() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Usage
  const queue = new Queue();
  queue.enqueue("G");
  queue.enqueue("A");
  queue.enqueue("c");
  console.log(queue);