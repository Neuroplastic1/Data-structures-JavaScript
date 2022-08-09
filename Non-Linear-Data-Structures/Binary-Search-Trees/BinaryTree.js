class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value
    this.depth = depth
    this.left= null
    this.right = null
  }
  // When inserting a new value into a binary tree, compare it with the root node’s value
  insert(value) {
    // If the new value is less than the root node's value
    if (value < this.value) {
      // If a left child node doesn't exist
      if (!this.left) {
        // Create a new BinaryTree with the new value at a greater depth and assign it to the left pointer
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        // Recursively call .insert() on the left child node
        this.left.insert(value);
      }
    } else {
      // if a right child node doesn't exist
      if (!this.right) {
        // Create a new BinaryTree with the new value at a greater depth and assign it to a right pointer
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        // Recursively call .insert() on the right child node
        this.right.insert(value);
      }
    }
  }


  // Retrieve a Node by Value
  getNodeByValue(value) {
    // If target value is the same as the current node value
    if (this.value === value) {
      // Return the current node
      return this;
    // If target value is less than the root node's value and there is a left child node
    } else if ((this.left) && (value < this.value)) {
        // Recursively search from the left child node
        return this.left.getNodeByValue(value);
    // Else if there is a right child node
    } else if (this.right) {
        // Recursively search from the right child node
        return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }
};

module.exports = BinaryTree;
