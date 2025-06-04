// Node class
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Linked List class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(number) {
      const newNode = new Node(number);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Updated print format: 10 -> 20 -> 30 -> null
    print() {
      let current = this.head;
      let output = "";
      while (current) {
        output += current.data + " -> ";
        current = current.next;
      }
      output += "null"; // end of the list
      console.log(output);
    }
  }
  
  // ✅ Usage
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  list.print();
  