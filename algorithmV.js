//1 Reset Negatives
function resetNegatives(arr) {
	for (var i =arr.length - 1; i >= 0; i--) {
	if (arr[i]<0) {
		arr[i]=0;
	} 
	}
	return arr
}
console.log(resetNegatives([1,2,-1,-3]));

//2 Move Forward
function moveForward(arr) {
	var arrnew=[];
	for (var i = 0 ; i <arr.length; i++) {
		if (i>0) {
			arrnew.push(arr[i])
		}
	}
	arrnew.push(0);
	return arrnew;
	// body...
}
console.log(moveForward([1,2,3]))

//3 Return Revesed
function returnReversed(arr) {
	var arrnew=[];
	for (var i =arr.length - 1; i >= 0; i--) {
			arrnew.push(arr[i])
	}
	
	return arrnew;
	// body...
}
console.log(returnReversed([1,2,3]))

//4 return array twice
function returnTwice(arr) {
	var arrnew=[];
	for (var i = 0; i <arr.length; i++) {
	arrnew.push(arr[i]);
	arrnew.push(arr[i]);
	}
	console.log(arrnew);
}
console.log(returnTwice( [4,'Ulysses', 42, false] ));