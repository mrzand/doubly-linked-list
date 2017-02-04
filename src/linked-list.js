const Node = require('./node'); 
class LinkedList { 
constructor() { 
this._head = null; 
this._tail = null; 
this.length = 0; 
} 
append(data) { 
var newNode = new Node(data); 
if (this._head === null) { 
this._head = newNode; 
this._tail = newNode; 
} 
else { 
this._tail.next = newNode; 
newNode.prev = this._tail; 
this._tail = newNode; 
} 
this.length++; 
return this; 
} 
head() { 
return this._head ? this._head.data : null; 
} 
tail() { 
return this._tail ? this._tail.data : null; 
} 
at(index) { 
var node = this.nodeAt(index); 
return node !== null ? node.data : null; 
} 
nodeAt(index) { 
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
var currentNode = this.nodeAt(index); 
if (currentNode) { 
var newNode = new Node(data); 
if (currentNode === this._head) { 
this._head.prev = newNode; 
newNode.next = this._head; 
this._head = newNode; 
} 
else { 
newNode.prev = currentNode.prev; 
newNode.next = currentNode; 
var prev = currentNode.prev; 
prev.next = newNode; 
currentNode.prev = newNode; 
} 
this.length++; 
} 
return this; 
} 
isEmpty() { 
return this._head === null; 
} 
clear() { 
this._head = null; 
this._tail = null; 
this.length = 0; 
return this; 
} 
deleteAt(index) { 
var nodeToDelete = this.nodeAt(index); 
if (nodeToDelete) { 
if (this.length === 1) { 
this.clear(); 
} 
else { 
if (nodeToDelete === this._head) { 
var newHead = this._head.next; 
newHead.prev = null; 
this._head = newHead; 
} 
else if (nodeToDelete === this._tail) { 
var newTail = this._tail.prev; 
newTail.next = null; 
this._tail = newTail; 
} 
else { 
var prev = nodeToDelete.prev; 
var next = nodeToDelete.next; 
prev.next = next; 
next.prev = prev; 
} 
} 
this.length--; 
} 
return this; 
} 
reverse() { 
if (this.length > 1) { 
var currentNode = this._head; 
this._tail = this._head; 
while (currentNode) { 
var next = currentNode.next; 
currentNode.next = currentNode.prev; 
currentNode.prev = next; 
this._head = currentNode; 
currentNode = next; 
} 
} 
return this; 
} 
indexOf(data) { 
if (data) { 
var currentNode = this._head; 
var resultIndex = -1; 
var currentIndex = 0; 
if (currentNode) { 
while (resultIndex < 0 && currentNode) { 
if (currentNode.data === data) { 
resultIndex = currentIndex; 
} 
currentNode = currentNode.next; 
currentIndex++; 
} 
} 
return resultIndex; 
} 
} 
} 
module.exports = LinkedList;