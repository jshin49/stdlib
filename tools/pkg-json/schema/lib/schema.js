'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var SCHEMA = require( './schema.json' );


// MAIN //

/**
* Returns a JSON schema for package.json.
*
* @returns {Object} JSON schema
*
* @example
* var json = schema();
*/
function schema() {
	return copy( SCHEMA );
} // end FUNCTION schema()


// EXPORTS //

module.exports = schema;
