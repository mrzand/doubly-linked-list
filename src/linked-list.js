const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var newNode = new Node(data);
        if (this._head === null) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
    }

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    at(index) {
        var currentNode = null;
        if (index >= 0) {
            currentNode = this._head;
            for (var i = 1; i <= index; i++) {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    insertAt(index, data) {
        var currentNode = at(index);
        if (currentNode) {
            var newNode = new Node(data);

            if (currentNode.prev === null) {
                this._head.prev = newNode;
                newNode.next = this._head;
                this._head = newNode;
            } else {
                var prevNode = currentNode.prev;

                prevNode.next = newNode;
                newNode.prev = prevNode;

                newNode.next = currentNode;
                currentNode.prev = newNode;
            }
        }
    }

    isEmpty() {
        return this._head === null;
    }

    clear() {
        this._head = null;
    }

    deleteAt(index) {
        if (index === 0) {
            var secondNode = this._head.next;
            secondNode.prev = null;
            this._head = secondNode;
        } else {
            var nodeToDelete = at(index);
            if (nodeToDelete) {
                if (nodeToDelete.next !== null) {

                } else {

                }
            }
        }
    }

    reverse() {}

    indexOf(data) {
        if (data) {
            var currentNode = this._head;
            var resultIndex = -1;

            var currentIndex = 0;
            while (resultIndex >= 0 || currentNode.next !== null) {
                if (currentNode.data === data) {
                    resultIndex = currentIndex;
                }

                currentElement = currentNode.next;
                currentIndex++;
            }

            return resultIndex;
        }
    }
}

module.exports = LinkedList;
