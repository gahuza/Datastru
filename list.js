//gahuzamiryango revision on linked list
class Node{
    constructor(data){
   this.data = data;
   this.next = null;
    }
}

class LinkedList{
   constructor(){
    this.head = nul;
   }

   append(value){
    const newNode = new Node(value);
    if(!this.head){
        this.head = new Node;
        return;
    }

    let current = this.head;
    while(current.next){
        current = current.next;
    }
    current.next = new Node;

   }
   printlist(){
  let current = this.head;
  while(current){
    console.log(current.value);
    current = current.next;
  }
   }

}
// usage
const list = new LinkedLinked();
list.append(10);
list.appens(20);