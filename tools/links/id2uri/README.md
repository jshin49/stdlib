# id2uri

> Return the URI corresponding to a provided id.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var id2uri = require( '@stdlib/tools/links/id2uri' );
```

<a name="async"></a>

#### id2uri( id, \[options,\] clbk )

Returns the `URI` corresponding to a provided `id`.

``` javascript
id2uri( 'bibtex', clbk );

function clbk( error, uri ) {
    if ( error ) {
        throw error;
    }
    console.log( uri );
    // => 'http://www.bibtex.org/'
}
```

The function accepts the following `options`:

* __database__: path to a link database.

To use an alternative link database, set the `database` option.

``` javascript
var opts = {
    'database': './path/to/link/database/json'
};

id2uri( 'bibtex', opts, clbk );

function clbk( error, uri ) {
    if ( error ) {
        throw error;
    }
    console.log( uri );
}
```


#### id2uri.sync( id\[, options\] )

Synchronously returns the `URI` which corresponds to a provided `id`.

``` javascript
var uri = id2uri.sync( 'bibtex' );
if ( uri instanceof Error ) {
    throw id;
}
console.log( uri );
// => 'http://www.bibtex.org/'
```

The method accepts the same `options` as [`id2uri()`](#async) above.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

* If a function is unable to resolve a `URI`, the function returns `null`.
* A link database is resolved relative to the current working directory of the calling process and should be a [JSON][json] file.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

``` javascript
var id2uri = require( '@stdlib/tools/links/id2uri' );

id2uri( 'stdlib', clbk );

function clbk( error, uri ) {
    if ( error ) {
        throw error;
    }
    console.log( uri );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

---

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

``` bash
Usage: id2uri [options] [<id>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --database filepath   Database filepath.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

* If invoked without an id, the CLI will interactively prompt for argument input.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

``` bash
$ id2uri bibtex
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

</section>

<!-- /.links -->
