var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.indexCounter = 0;
  this.storage = {};

};

Stack.prototype.size = function(){
	return this.indexCounter;
};

Stack.prototype.push = function(value){
	this.storage[this.indexCounter] = value;
	this.indexCounter++;
};

Stack.prototype.pop = function(){
	if(this.indexCounter>0){
		this.indexCounter--;
		var temp = this.storage[this.indexCounter];
		delete this.storage[this.indexCounter];
		return temp;
	}

};

var newStack = new Stack();

