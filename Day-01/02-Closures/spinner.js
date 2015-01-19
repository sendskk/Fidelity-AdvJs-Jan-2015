//Create an object "spinner"

var spinner = (function(){
	var count = 0;
	function up(){
		return ++count;
	}
	function down(){
		return --count;
	}
	return {
		up : up,
		down : down
	}
})();

//The object is expected to exhibit two methods "up" and "down" that behaves as given below

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1


//Prime finder
function getPrimeFinder(){
	var cache = {};
	function checkPrime(n){
		if (n <= 3) return true;
		for(var i=2; i<=(n/2); i++)
			if (n % i == 0) return false;
		return true;
	}
	/*return function (n){
		if (typeof cache[n] !== "undefined"){
			console.log("from cache");
			return cache[n];
		}
		console.log("Juz processed");
		cache[n] = checkPrime(n);
		return cache[n];
	}*/
	return function(n){
		if (typeof cache[n] === "undefined") 
			cache[n] = checkPrime(n);
		return cache[n];
	}
}
