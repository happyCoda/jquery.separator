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
	    newPriceValStrLen,
	    divArr,
	    leftSide,
	    rightSide,
	    rightSideLen,
	    pointer,
	    i,
	    j;

	    if (isNaN(newPriceVal)) {
	        return 'Not a number }:';
	    }


	    newPriceValStr = newPriceVal.toString();

	    newPriceValStrLen = newPriceValStr.length;

	    if (newPriceValStrLen > 3) {

	    	for (i = 0; i < newPriceValStrLen; i += 1) {
	    		if (newPriceValStr.slice(i).length % 3 === 0) {
	    			if (i === 0) {
	    				leftSide = 3;
	    			} else {
	    				leftSide = i;
	    			}

	    			pointer = leftSide;

	    			divArr = [newPriceValStr.slice(0, leftSide)];
	    			
	    			rightSide = newPriceValStr.slice(leftSide);
	    			rightSideLen = rightSide.length;
	    			break;
	    		}
	    	}

	    	console.log(divArr);

	    	for (j = 0; j < rightSideLen; j += 1) {
	    		divArr.push(newPriceValStr.slice(pointer, pointer + 3));
	    		pointer += 3;
	    	}
	    	processedVal = divArr.join(' ');

	    } else {

	    	processedVal = newPriceValStr;
	    }

	    

	    return processedVal;
	};
} (jQuery));