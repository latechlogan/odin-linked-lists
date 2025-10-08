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

    return "The index you're requesting does not exist.";
  }

  pop() {
    // removes the last element from the list
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
