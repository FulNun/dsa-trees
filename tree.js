
class Tree {
  constructor(root = null) {
    this.root = root;
  }

  sumValues() {
    if (!this.root) return 0;
    let total = 0;
    let stack = [this.root];

    while (stack.length) {
      let node = stack.pop();
      total += node.value;
      for (let child of node.children) {
        stack.push(child);
      }
    }

    return total;
  }

  countEvens() {
    if (!this.root) return 0;
    let count = 0;
    let stack = [this.root];

    while (stack.length) {
      let node = stack.pop();
      if (node.value % 2 === 0) count++;
      for (let child of node.children) {
        stack.push(child);
      }
    }

    return count;
  }

  numGreater(x) {
    if (!this.root) return 0;
    let count = 0;
    let stack = [this.root];

    while (stack.length) {
      let node = stack.pop();
      if (node.value > x) count++;
      for (let child of node.children) {
        stack.push(child);
      }
    }

    return count;
  }
}
