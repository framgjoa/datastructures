var BinarySearchTree = function(value){
	var storage = {};
	storage.value = value;
	storage.left = null;
	storage.right = null;
	_.extend(storage, binarySearchTreeMethods);
	return storage;
};

var binarySearchTreeMethods = {};
binarySearchTreeMethods.insert = function(value2){

var checkNode = function(node){
	if (value2 > node.value){ //The value should be to the right of this node
		if (node.right){
		checkNode(node.right);
	}
		else{   //Creates node if the right branch doesn't exist
				node.right = new BinarySearchTree(value2);
		}
	}

	if (value2 < node.value){
			if (node.left){
			checkNode(node.left);
		}
			else{
				node.left = new BinarySearchTree(value2);
				
			}
		}
	}
	checkNode(this);
};

binarySearchTreeMethods.contains = function(value3){
var isFound = false;	

var checkNode = function(node){
	if (node.value === value3){
		isFound = true;
	}
	else if (value3 > node.value && node.right){
		checkNode(node.right);
	}
	else if (value3 < node.value && node.left){
		checkNode(node.left);
	}
}

checkNode(this);
return isFound;

};

binarySearchTreeMethods.depthFirstLog = function(cb){


var walk = function(testNode){
	cb(testNode.value);
	for (var i = 0; i <2; i++){
		if (i===0 && testNode.left){
			walk(testNode.left)
		}
		else if (i===1 && testNode.right){
			walk(testNode.right)
		}
	}
}
walk(this);
};

binarySearchTreeMethods.walk = function(node, truthTest){  
//Walk function which goes through entire tree and returns the node which passes the truth test
	
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
