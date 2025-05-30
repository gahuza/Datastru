class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Usage
  const stack = new Stack();
  stack.push("X");
  stack.push("Y");
  console.log(stack.pop()); // answer is Y
  