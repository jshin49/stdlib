'use strict';

// FUNCTIONS //

/**
* Comparator function to sort values in ascending order.
*
* @private
* @param {number} a
* @param {number} b
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// UNIQUE //

/**
* Removes duplicate values from a numeric array.
*
* #### Method
*
* Loop through the array, only incrementing a pointer when successive values are different. When a succeeding value is different, move the pointer and set the next value. In the trivial case where all array elements are unique, we incur a slight penalty in resetting the element value for each unique value. In other cases, we simply move a unique value to a new position in the array. The end result is a sorted array with unique values.
*
* @private
* @param {Array} arr - array to be deduped
* @returns {Array} sorted array with duplicate values removed
*/
function unique( arr ) {
	var len = arr.length;
	var out;
	var val;
	var i;
	var j;

	out = arr.slice();
	out.sort( ascending );
	for ( i = 1, j = 0; i < len; i++ ) {
		val = out[ i ];
		if ( out[ j ] !== val ) {
			j++;
			out[ j ] = val;
		}
	}
	// Truncate the array:
	out.length = j+1;
	return out;
} // end FUNCTION unique()


// EXPORTS //

module.exports = unique;
