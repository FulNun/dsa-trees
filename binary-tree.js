
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    if (!this.root) return 0;
    let queue = [[this.root, 1]];

    while (queue.length) {
      let [node, depth] = queue.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push([node.left, depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    }
  }

  maxDepth() {
    if (!this.root) return 0;
    let queue = [[this.root, 1]];
    let maxDepth = 0;

    while (queue.length) {
      let [node, depth] = queue.shift();
      maxDepth = Math.max(maxDepth, depth);
      if (node.left) queue.push([node.left, depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    }

    return maxDepth;
  }

  maxSum() {
    let maxSum = -Infinity;

    function helper(node) {
      if (!node) return 0;
      let left = Math.max(0, helper(node.left));
      let right = Math.max(0, helper(node.right));
      maxSum = Math.max(maxSum, node.value + left + right);
      return node.value + Math.max(left, right);
    }

    helper(this.root);
    return maxSum;
  }

  nextLarger(x) {
    if (!this.root) return null;
    let queue = [this.root];
    let result = null;

    while (queue.length) {
      let node = queue.shift();
      if (node.value > x && (result === null || node.value < result)) {
        result = node.value;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }
}
