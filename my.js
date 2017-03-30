Array.prototype.forEach = function(callback){
	var value,index;
	var O = Object(this);
	var arr = [];
	for(var i in O){
		index = i;
		value = O[i];
		arr.push(callback.call(O,value,index,O));
	}
	return arr;
}

Array.prototype.map = function(callback){
	var value;
	var O = Object(this);
	var arr = [];
	for(var i in O){
		value = O[i];
		arr.push(callback.call(O,value));
	}
	return arr;
}


Array.prototype.every = function(callback){
	var value;
	var arr = [];
	var O = Object(this);
	for(var i in O){
		value = O[i];
		if(callback.call(O,value)){
			arr.push(value);
		}
	}
	return arr;
}

Array.prototype.reduce = function(callback){
	var value;
	var O = Object(this);
	var len = O.length;
	for(var i = 0; i < len-1; i++){
		if(i == 0){
			value = O[i];
		}else{
			value = callback.call(O,value,O[i+1]);
		}
		callback.call(O,value,O[i+1]);		
	}
	return value;
}

exports.reduce = Array.prototype.reduce;
exports.every = Array.prototype.every;
exports.forEach = Array.prototype.forEach;
exports.map = Array.prototype.map;

