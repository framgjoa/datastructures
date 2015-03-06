

var Graph = function(){
	this.nodeHome = {};
};

Graph.prototype.addNode = function(node){
	var newNode = {
	 	connections : []
	};

	this.nodeHome[node] = newNode;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.nodeHome[fromNode].connections.push(toNode);
	this.nodeHome[toNode].connections.push(fromNode);
};

Graph.prototype.contains = function(node){
	var isFound = false;

	if (node in this.nodeHome) {
		isFound = true;
	}
	
	return isFound;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return this.nodeHome[fromNode].connections.indexOf(toNode) >= 0 ? true : false;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var tempIndex = this.nodeHome[fromNode].connections.indexOf(toNode);
	this.nodeHome[fromNode].connections.splice(tempIndex, 1);
	var tempIndex = this.nodeHome[toNode].connections.indexOf(fromNode);
	this.nodeHome[toNode].connections.splice(tempIndex, 1);
};

Graph.prototype.removeNode = function(node){
	delete this.nodeHome[node];
};

Graph.prototype.forEachNode = function(cb){
	for (var key in this.nodeHome) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



