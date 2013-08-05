/*
* Thousand Separator jQuery plugin. 
* (c) 2013, happyCoda. 
* MIT License. 
* https://github.com/happyCoda/thousand_separator
*/

(function ($) {
	$.t_separator = function (price) {
		var newPriceVal = parseInt(price, 10),
	    newPriceValStr,
	    div,
	    divLength,
	    processedVal;

	    if (isNaN(newPriceVal)) {
	        return 'Not a number';
	    }

	    newPriceValStr = newPriceVal.toString();
	    div = parseInt(newPriceVal / 1000, 10).toString();
	    divLength = div.length;
	    processedVal;


	    if (div.length < 4) {
	        processedVal = newPriceValStr.slice(0, divLength) + ' ' + newPriceValStr.slice(divLength);
	    } else if (div.length === 4) {
	        processedVal = newPriceValStr.slice(0, 1) + ' ' + newPriceValStr.slice(1, divLength) + ' ' + newPriceValStr.slice(divLength);
	    } else if (div.length === 5) {
	        processedVal = newPriceValStr.slice(0, 2) + ' ' + newPriceValStr.slice(2, divLength) + ' ' + newPriceValStr.slice(divLength);
	    } else if (div.length === 6) {
	        processedVal = newPriceValStr.slice(0, 3) + ' ' + newPriceValStr.slice(3, divLength) + ' ' + newPriceValStr.slice(divLength);
	    } else {
	        processedVal = '999 999 999';
	    }
	    
	    return processedVal;
	};
} (jQuery));