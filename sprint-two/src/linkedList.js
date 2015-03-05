var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }    
    this.tail = newNode;
    list.head ? list.head : list.head = newNode; 
  };

  list.removeHead = function(){
    if (this.head) {
      var tempHead = this.head;
      this.head = this.head.next;
      return tempHead.value;
    }
  };

  list.contains = function(target){
    var isFound = false;
    //var testNode = this.head;
    var checkValue = function(testNode) {
      if (testNode.value === target) {
        isFound = true;
      }
      if (testNode.next) { checkValue(testNode.next); };
    };

    checkValue(this.head);
    return isFound;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
