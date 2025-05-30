class Stack{
    constructor(){
        this.items = [];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
}

const stack = new Stack;
stack.push('Level 4 sod');
stack.push('Level 3 sod');
stack.push('Level 5 sod');
stack.push('Level 4 BDC');
stack.push('Level 3 BDC');
stack.push('Level 5 BDC');
console.log(stack.pop());