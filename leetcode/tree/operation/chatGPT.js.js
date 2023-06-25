class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    this.root = this._insert(this.root, key);
  }

  _insert(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (key < node.key) {
      node.left = this._insert(node.left, key);
    } else if (key > node.key) {
      node.right = this._insert(node.right, key);
    }

    return node;
  }

  delete(key) {
    this.root = this._delete(this.root, key);
  }

  _delete(node, key) {
    if (node === null) {
      return node;
    }

    if (key < node.key) {
      node.left = this._delete(node.left, key);
    } else if (key > node.key) {
      node.right = this._delete(node.right, key);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      const minRight = this._findMin(node.right);
      node.key = minRight.key;
      node.right = this._delete(node.right, minRight.key);
    }

    return node;
  }

  search(key) {
    return this._search(this.root, key);
  }

  _search(node, key) {
    if (node === null || node.key === key) {
      return node;
    }

    if (key < node.key) {
      return this._search(node.left, key);
    }

    return this._search(node.right, key);
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }
}
