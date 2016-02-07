/*
*	Separator jQuery plugin.
* (c) 2016, happyCoda.
* MIT License.
* https://github.com/happyCoda/jquery.separator
*/

(function ($) {
	$.separator = function (price) {
		var newPriceVal = parseInt(price, 10),
	    newPriceValStr,
	    newPriceValStrLen,
			processedVal;

			function separate(num) {
			  var numStr = num.toString(),
			      len = numStr.length,
						rightLen,
			      i = 0,
						j = 0,
			      left,
			      right,
			      numArr = [];

			  for (; i < len; i += 1) {
			    right = numStr.slice(i);

					rightLen = right.length;

			    if (i > 0 && rightLen % 3 === 0) {
			      left = numStr.slice(0, i);

			      numArr.push(left);

			      for (; j < rightLen; j += 3) {
			        numArr.push(right.slice(j, j + 3));
			      }

			      break;
			    }
			  }

			  return numArr;

			}

	    if (isNaN(newPriceVal)) {
	        throw new Error('Not a number }:');
	    }


	    newPriceValStr = newPriceVal.toString();

	    newPriceValStrLen = newPriceValStr.length;

	    if (newPriceValStrLen > 3) {

				processedVal = separate(newPriceVal).join(' ');

	    } else {

	    	processedVal = newPriceValStr;
	    }


	    return processedVal;
	};
} (jQuery));
