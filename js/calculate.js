/* Variables */
var load = document.getElementById("load").value;
var dryw = document.getElementById("drywall").value;
var insu = document.getElementById("insulation").value;
var elet = document.getElementById("eletronics").value;
var chem = document.getElementById("chemicals").value;
var matt = document.getElementById("mattresses").value;
var heav = document.getElementById("heavy").value;
var tire = document.getElementById("tires").value;
var price = parseInt(document.getElementById("price").value);

var loadR = 0;
var drywR = 0;
var insuR = 0;
var eletR = 0;
var chemR = 0;
var mattR = 0;
var heavR = 0;
var tireR = 0;

var total = 0;

//https://teamtreehouse.com/community/javascript-error-uncaught-syntaxerror-unexpected-end-of-input
//_______________________________________________try this______

function getprice()
{
	var load = document.getElementById("load").value;
	var insu = document.getElementById("insulation").value;
	var elet = document.getElementById("eletronics").value;
	var chem = document.getElementById("chemicals").value;
	var matt = document.getElementById("mattresses").value;
	var heav = document.getElementById("heavy").value;
	var tire = document.getElementById("tires").value;
	var price = parseInt(document.getElementById("price").value);
	var dryw = document.getElementById("drywall").value;
	var result = 0;
	var total_fee = 0;

	//load
	if (load == "1")
	{
		result = 1 * price;
	}
	else if (load == "2")
	{
		result = 2 * price;
	}
	else if (load == "3")
	{
		result = 3 * price;
	}
	else if (load == "4")
	{
		result = 4 * price;
	}
	//drywall
	if (dryw == "0")
	{
		result = result + 0;
	}
	else if (dryw == "1")
	{
		result = result + 100;
	}
	else if (dryw == "2")
	{
		result = result + 200;
	}
	//insulation

	if (insu == "0")
	{
		result = result + 0;
	}
	else if (insu == "1")
	{
		result = result + 100;
	}
	else if (insu == "2")
	{
		result = result + 200;
	}
	//eletronics
	if (elet == "0")
	{
		result = result + 0;
	}
	else if (elet == "1")
	{
		result = result + 50;
	}
	else if (elet == "2")
	{
		result = result + 100;
	}
	else if (elet == "3")
	{
		result = result + 150;
	}
	else if (elet == "4")
	{
		result = result + 250;
	}
	//chemicals
	if (chem == "0")
	{
		result = result + 0;
	}
	else if (chem == "1")
	{
		result = result + 30;
	}
	else if (chem == "2")
	{
		result = result + 60;
	}
	else if (chem == "3")
	{
		result = result + 90;
	}
	else if (chem == "4")
	{
		result = result + 120;
	}
	//mattresses
	if (matt == "0")
	{
		result = result + 0;
	}
	else if (matt == "1")
	{
		result = result + 40;
	}
	else if (matt == "2")
	{
		result = result + 50;
	}
	else if (matt == "3")
	{
		result = result + 70;
	}
	else if (matt == "4")
	{
		result = result + 100;
	}
	//heavy
	if (heav == "0")
	{
		result = result + 0;
	}
	else if (heav == "1")
	{
		result = result + 60;
	}
	else if (heav == "2")
	{
		result = result + 120;
	}
	else if (heav == "3")
	{
		result = result + 200;
	}
	else if (heav == "4")
	{
		result = result + 300;
	}
	//tires
	if (tire == "0")
	{
		result = result + 0;
	}
	else if (tire == "1")
	{
		result = result + 60;
	}
	else if (tire == "2")
	{
		result = result + 120;
	}
	else if (tire == "3")
	{
		result = result + 200;
	}
	else if (tire == "4")
	{
		result = result + 300;
	}

	document.getElementById("total").value = "$" + result;
}