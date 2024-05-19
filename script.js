const ListNode = class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

const LinkedList = class LinkedList {
  constructor(node) {
    this.head = node;
  }

  add(value) {
    const newNode = new ListNode(value);

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    return this;
  }

  pop() {
    if (!this.head) return false;
    if (!this.head.next) {
      this.head = null;
      return true;
    }

    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
    return true;
  }

  delete(index) {
    if (index === 0) {
      if (this.head) {
        this.head = this.head.next;
        return true;
      }
      return false;
    }

    let current = this.head;
    let i = 0;

    while (current !== null && current.next !== null) {
      if (i === index - 1) {
        current.next = current.next.next;
        return true;
      }

      current = current.next;
      i++;
    }

    return false;
  }

  insertAt(index, node) {
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return true;
    }

    let current = this.head;
    let i = 0;

    while (current !== null) {
      if (i === index - 1) {
        node.next = current.next;
        current.next = node;
        return true;
      }

      current = current.next;
      i++;
    }

    return false;
  }

  count() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  find(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return new LinkedList(current);
      }

      current = current.next;
    }

    return null;
  }

  displayList() {
    let current = this.head;
    let output = "";

    while (current !== null) {
      output += `${current.value} -> `;
      current = current.next;
    }

    output += "NULL";
    console.log(output);
  }
};

const node1 = new ListNode(1);
const linkedList = new LinkedList(node1);

linkedList.add(4).add(5).add(100).add(102).add(103).add(105).add(106).add(42);
linkedList.displayList();
linkedList.pop();
linkedList.delete(5);
linkedList.delete(5);
linkedList.insertAt(2, new ListNode(99));
linkedList.displayList();

console.log(linkedList.count());

const node2 = linkedList.find(100);
const newLinkedList = new LinkedList(node2?.head);

newLinkedList.displayList();
