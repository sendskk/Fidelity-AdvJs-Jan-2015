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

//filter

var filter = function(list, criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++){
		var product = list[i];
		if (criteriaFn(product))
			result.push(product);
	}
	return result;
}

var costlyProductCriteria = function(product){
	return product.cost > 50;
}
var costlyProducts = filter(products, costlyProductCriteria);
console.group("Filter - Costly products [cost > 50]")
console.table(costlyProducts);
console.groupEnd();

/*var productByCategory1Criteria = function(product){
	return product.category === 1;
}*/
var categoryCriteriaFactory = function(category){
	return function(product){
		return product.category === category;
	}
}
var productByCategory1Criteria = categoryCriteriaFactory(1);

var category1Products = filter(products,productByCategory1Criteria);
console.group("Filter - Catgeroy-1")
console.table(category1Products);
console.groupEnd();

var inverseCriteriaFactory = function(criteriaFn){
	return function(product){
		return !criteriaFn(product);
	}
}
var affordableProductsCriteria = inverseCriteriaFactory(costlyProductCriteria);
var affordableProducts = filter(products,affordableProductsCriteria);
console.group("Affordable product [!costly products]");
console.table(affordableProducts);
console.groupEnd();

var min = function(list, valueSelectorFn){
	var result = valueSelectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var value = valueSelectorFn(list[i]);
		if (value < result) result = value;
	}
	return result;
}
var minCost = min(products, function(product){ return product.cost; });
console.log("Min cost ", minCost);
var minProductValue = min(products, function(product){ return product.cost * product.units; });
console.log("Min Product Value ", minProductValue);
/*

min
max
sum
avg
countBy
all
any
groupBy
*/

var all = function(list, predicate){
	for(var i=0;i<list.length;i++)
		if (!predicate(list[i])) return false;
	return true;
}

var any = function(list, predicate){
	for(var i=0;i<list.length;i++)
		if (predicate(list[i])) return true;
	return false;
}

var groupBy = function(list, keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		/*if (typeof result[key] === "undefined")
			result[key] = [];*/
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var categorySelectorFn = function(p){ return p.category;}
var productsByCategory = groupBy(products, categorySelectorFn);
console.table(productsByCategory[1]);
console.table(productsByCategory[2]);

var productCostSelectorFn = function(product){
	if (product.cost <= 40) return "cheap";
	if (product.cost <= 60) return "affordable";
	return "costly";
}
var productsByCost = groupBy(products, productCostSelectorFn);
console.log(productsByCost);