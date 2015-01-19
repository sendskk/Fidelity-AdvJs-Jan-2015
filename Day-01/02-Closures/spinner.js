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