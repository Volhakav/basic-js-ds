const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class RootTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const createNewNode = new RootTreeNode(data);

    if (!this.rootNode) {
      this.rootNode = createNewNode;
    } else {
      let current = this.rootNode;
      while (current) {
        if (data < current.data) {
          if (!current.left) {
            current.left = createNewNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = createNewNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  has(data) {
    return this.searchNode(this.rootNode, data);
  }

  searchNode(node, data) {
    if (!node) {
      return false;
    }
    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const min = this.findMinNode(node.right);
      node.data = min.data;
      node.right = this.removeNode(node.right, min.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  min(node) {
    return this.findMinNode(this.rootNode)?.data || null;
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  max(node) {
    return this.findMaxNode(this.rootNode)?.data || null;
  }

  findMaxNode(node) {
    if (!node.right) {
      return node;
    }
    return this.findMaxNode(node.right);
  }
}

module.exports = {
  BinarySearchTree,
};


