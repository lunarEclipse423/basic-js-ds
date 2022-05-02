const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    let current = this.head;
    let parent = current;
    while (current !== null)
    {
        parent = current;
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    if (data < parent.data) {
      parent.left = new Node(data);
    } else {
      parent.right = new Node(data);
    }
  }

  has(data) {
    let current = this.head;
    while (current !== null) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this.head;
    while (current !== null) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  remove(data) {
    let parent = null;
    let current = this.head;
    while (current !== null) {
      if (data < current.data) {
        parent = current;
        current = current.left;
      } else if (data > current.data) {
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }

    if (current === null) {
        return;
    }
 
    if (current.left === null && current.right === null)
    {
        if (current !== this.head)
        {
            if (parent.left === current) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else {
            this.head = null;
        }
        return;
    } else if (current.left && current.right)
    {
        let successor = current.right;
        while (successor.left !== null) {
          successor = successor.left;
        }
        let temp = successor.data;
        this.remove(successor.data);
        current.data = temp;
    } else {
        let child = current.left ? current.left : current.right;
        if (current !== this.head)
        {
            if (current == parent.left) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        } else {
            this.head = child;
        }
    }
  }

  min() {
    let current = this.head;
    let parent = null;
    while (current !== null) {
      parent = current;
      current = current.left;
    }
    return parent.data;
  }

  max() {
    let current = this.head;
    let parent = null;
    while (current !== null) {
      parent = current;
      current = current.right;
    }
    return parent.data;
  }
}

module.exports = {
  BinarySearchTree
};