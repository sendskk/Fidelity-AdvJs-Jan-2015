var products = [
	{id : 8, name : "Pen", cost : 50, units : 60, category : 1},
	{id : 3, name : "Hen", cost : 70, units : 80, category : 2},
	{id : 9, name : "Ten", cost : 90, units : 30, category : 1},
	{id : 6, name : "Den", cost : 40, units : 90, category : 2},
	{id : 5, name : "Len", cost : 60, units : 40, category : 1},
	{id : 7, name : "Zen", cost : 80, units : 20, category : 2}
]
console.group("Default list");
console.table(products);
console.groupEnd();

var sort = function(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1; j<list.length;j++){
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}
console.group("Sort")

console.group("After sorting (default)");
sort(products, "id");
console.table(products);
console.groupEnd();

console.group("After sorting by cost");
sort(products, "cost");
console.table(products);
console.groupEnd();

var sort = function(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1; j<list.length;j++){
			if (comparerFn(list[i], list[j]) > 0 ){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}
/*
The comparerFn has to return
	-1 if left < right
	0 if left === right
	1 if left > right
*/
var productComparerByValue = function(p1,p2){
	var p1Value = p1.cost * p1.units,
		p2Value = p2.cost * p2.units;

	if (p1Value < p2Value) return -1;
	if (p1Value === p2Value) return 0;
	return 1;
}

console.group("By product value")
sort(products,productComparerByValue);
console.table(products);
console.groupEnd();

console.groupEnd();

/*
filter
min
max
sum
avg
countBy
all
any
groupBy
*/