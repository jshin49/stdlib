'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils/noop' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var TEST1 = require( './fixtures/test1.js' );
var TEST3 = require( './fixtures/test3.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		true,
		false,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws type error' );
	t.end();

	function foo() {
		factory({
			'ex': null
		});
	}
});

tape( 'the function returns a function which throws an error if not provided an input string', function test( t ) {
	var tex2svg;
	var values;
	var i;

	values = [
		5,
		null,
		NaN,
		true,
		false,
		void 0,
		[],
		{},
		function noop() {}
	];

	tex2svg = factory( {} );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tex2svg( value, noop );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a callback argument which is not a function', function test( t ) {
	var tex2svg;
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		true,
		void 0,
		[],
		{}
	];

	tex2svg = factory( {} );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tex2svg( 'y = mx + b', value );
		};
	}
});

tape( 'the function returns a function which returns any errors to a provided callback', function test( t ) {
	var tex2svg = factory( {} );

	// Non-existent LaTeX command...
	tex2svg( '\\infinity', clbk );

	function clbk( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function returns a function which converts an input string to an SVG', function test( t ) {
	var tex2svg = factory( {} );
	tex2svg( '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt.', clbk );

	function clbk( error, svg ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( typeof svg, 'string', 'returns a string' );
		t.strictEqual( svg.substring( 0, 4 ), '<svg', 'svg tag' );
		t.strictEqual( svg.substring( svg.length-6 ), '</svg>', 'closing svg tag' );
		t.strictEqual( svg, TEST1, 'expected value' );
		t.end();
	}
});

tape( 'the function returns a function which converts an input string to an SVG (options)', function test( t ) {
	var tex2svg;
	var opts;

	opts = {
		'width': 200,
		'ex': 2,
		'inline': true,
		'linebreaks': false
	};
	tex2svg = factory( opts );
	tex2svg( '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt.', clbk );

	function clbk( error, svg ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( typeof svg, 'string', 'returns a string' );
		t.strictEqual( svg.substring( 0, 4 ), '<svg', 'svg tag' );
		t.strictEqual( svg.substring( svg.length-6 ), '</svg>', 'closing svg tag' );
		t.strictEqual( svg, TEST3, 'expected value' );
		t.end();
	}
});
