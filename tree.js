class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      const queue = [this.root];
      while (queue.length) {
        const node = queue.shift();
        if (!node.left) {
          node.left = newNode;
          return;
        } else if (!node.right) {
          node.right = newNode;
          return;
        } else {
          queue.push(node.left);
          queue.push(node.right);
        }
      }
    }
  
    inOrderTraversal(node = this.root) {
      if (!node) return;
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
  
  // Usage
  const tree = new BinaryTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.inOrderTraversal(); // 2, 1, 3
  