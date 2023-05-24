const LinkedList = () => {
  return {
    HEAD: null,
    TAIL: null,
    length: 0,
    append: function (value) {
      const node = Node(value);
      if (this.HEAD === null) {
        this.HEAD = node;
        this.TAIL = node;
        this.length++;
        return node;
      }
      this.TAIL.next = node;
      this.TAIL = node;
      this.length++;
      return node;
    },
    prepend: function (value) {
      const node = Node(value);
      if (this.HEAD === null) {
        this.HEAD = node;
        this.TAIL = node;
        this.length++;
        return node;
      }
      node.next = this.HEAD;
      this.HEAD = node;
      this.length++;
      return node;
    },
    size: function () {
      console.log("size: " + this.length);
      return this.length;
    },
    head: function () {
      console.log("head: " + this.HEAD);
      return this.HEAD;
    },
    tail: function () {
      console.log("tail: " + this.TAIL);
      return this.TAIL;
    },
    at: function (index) {
      if (index < 0 || index > this.length) {
        return null;
      }
      let node = this.HEAD;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      if (node === null) {
        return null;
      }
      console.log("at index " + index + ": " + node.value);
      return node;
    },
    pop: function () {
      if (this.HEAD === null) {
        return null;
      }
      let node = this.HEAD;
      let prev = null;
      while (node.next !== null) {
        prev = node;
        node = node.next;
      }
      prev.next = null;
      this.TAIL = prev;
      this.length--;
      return node;
    },
    contains: function (value) {
      let node = this.HEAD;
      while (node.value != value) {
        node = node.next;
        if (node === null) {
          return false;
        }
      }
      console.log("contains: " + value);
      return true;
    },
    find: function (value) {
      let node = this.HEAD;
      while (node.value != value) {
        node = node.next;
        if (node === null) {
          return null;
        }
      }
      console.log("find: " + value);
      return node;
    },
    toString: function () {
      let node = this.HEAD;
      let str = "";
      while (node !== null) {
        str += " ( " + node.value + " ) =>";
        node = node.next;
      }
      str += " null";
      console.log("toString:" + str);
      return str;
    },
    insertAt: function (index, value) {
      if (index < 0 || index > this.length) {
        return null;
      }
      let node = this.HEAD;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = node;
        node = node.next;
      }
      const newNode = Node(value);
      prev.next = newNode;
      newNode.next = node;
    },
    removeAt: function (index) {
      if (index < 0 || index > this.length) {
        return null;
      }
      let node = this.HEAD;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = node;
        node = node.next;
      }
      prev.next = node.next;
      node.next = null;
    },
  };
};

const Node = (value) => {
  return {
    value: value || null,
    next: null,
  };
};

const test = LinkedList();
test.append(1);
test.append(2);
test.append(2);
test.prepend(3);
test.pop();
console.log(test);
test.size();
test.at(0);
test.at(2);
test.contains(2);
test.contains(3);
test.insertAt(1, 5);
test.toString();
