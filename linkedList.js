class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    this.tail().nextNode = new Node(value);
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      ++count;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentNode !== null) {
      if (index === currentIndex) {
        return currentNode;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    return "Error: The index you're searching for does not exist.";
  }

  pop() {
    let length = this.size();
    let newTail = this.at(length - 2);
    newTail.nextNode = null;
    return "Tail node removed successfully.";
  }

  contains(value) {
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    return "Error: The value you're searching for does not exist.";
  }

  toString() {
    let current = this.headNode;
    let string = "";

    while (current !== null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return string.concat("null");
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
