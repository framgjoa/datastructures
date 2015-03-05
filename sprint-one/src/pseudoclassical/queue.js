var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.indexCounter = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
	return this.indexCounter;
};

Queue.prototype.dequeue = function() {
	if (this.indexCounter > 0) {
		this.indexCounter--;
		var temp = this.storage[this.indexCounter];
		delete this.storage[this.indexCounter];
		return temp;
	}
};

Queue.prototype.enqueue = function(value) {
	var tempCounter = this.indexCounter;
	while(tempCounter > 0){
		this.storage[tempCounter] = this.storage[tempCounter - 1];
		tempCounter--;
	}
	this.storage[0] = value;
	this.indexCounter++;
}

var output = new Queue();