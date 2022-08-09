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
};

module.exports = BinaryTree;
