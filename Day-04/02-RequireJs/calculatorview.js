define(['calculator'], function(calculator){
	return {
		run : function(){
			console.log("adding 100 and 200");
			var result = calculator.add(100,200);
			console.log("result = ", result);
		}
	};
});