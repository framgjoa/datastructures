var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //Need to check if there already is a value at that index, if so, create storage bucket array for new values
  if(this._storage.get(i) ){			//Case where already array pair at that index
  	var bucket = []; 
  	bucket.push(this._storage.get(i));	//Adding existing data to bucket
  	bucket.push([k,v]);									//Pushing new data into bucket
  	this._storage.set(i, bucket);				//Placing full bucket into original index position
  } 
  else{														//Empty space at array's index
  	this._storage.set(i,[k,v]);
	}
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempArray= this._storage.get(i);
  if (tempArray[0] === k){							//Simple case: single array pair at index
  	return tempArray[1];
  }
  else if(tempArray[0]){								//Bucket case: array of array pairs at index
  	for (var i =0; i < tempArray.length; i++){
  		if(tempArray[i][0] === k){
  			return tempArray[i][1];
  		}
  	}
  }
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage.set(i, [k, null]);  	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
