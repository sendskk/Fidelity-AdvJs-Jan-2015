//Create a SalaryCalculator which can be initialized with basic, hra, da, tax (%) & calculate() method. The default salary is 0. On invoking the calculate() method, the salary is updated with the appropriate value.

function SalaryCalculator(basic, hra, da, tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;
}
SalaryCalculator.prototype.calculate = function calculate(){
	var gross = this.basic + this.hra + this.da;
	this.salary = gross * ((100-this.tax)/100);
}