function expression(number, operation){
	if(!operation)
	return number;
	return operation(number);
}

function zero(operation) { return expression(0, operation); }
function one(operation) { return expression(1, operation); }
function two(operation) { return expression(2, operation); }
function three(operation) { return expression(3, operation); }
function four(operation) { return expression(4, operation); }
function five(operation) { return expression(5, operation); }
function six(operation) { return expression(6, operation); }
function seven(operation) { return expression(7, operation); }
function eight(operation) { return expression(8, operation); }
function nine(operation) { return expression(9, operation); }

function plus(val1) {
	return function(val2) {
		return val2 + val1;
	}
}
function minus(val1) {
	return function(val2) {
		return val2 - val1;
	}
}
function times(val1) {
	return function(val2) {
		return val2 * val1;
	}
}
function dividedBy(val1) {
	return function (val2) {
		return Math.floor(val2 / val1);
	}
}