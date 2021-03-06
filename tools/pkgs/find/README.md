# Find Packages

> Find packages.


<section class="usage">

## Usage

``` javascript
var findPkgs = require( '@stdlib/tools/pkgs/find' );
```

#### findPkgs( \[options,\] clbk )

Asynchronously search for packages.

``` javascript
findPkgs( onPkgs );

function onPkgs( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for packages. May be either an absolute file path or a path relative to the current working directory. Default: current working directory.
* __pattern__: glob pattern used to find packages. Default: `'**/package.json'`.
* __ignore__: list of glob patterns used to exclude matches.

To search from an alternative directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/foo/bar/baz'
};

findPkgs( opts, onPkgs );

function onPkgs( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

By default, the implementation searches for packages by finding `package.json` files. To provide an alternative include filter, set the `pattern` option.

``` javascript
var opts = {
    'pattern': '**/foo/**/package.json'
};

findPkgs( opts, onPkgs );

function onPkgs( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

To exclude matches, set the `ignore` option.

``` javascript
var opts = {
    'ignore': [
        'node_modules/**',
        'build/**',
        'reports/**'
    ]
};

findPkgs( opts, onPkgs );

function onPkgs( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```


#### findPkgs.sync( \[options\] )

Synchronously searches for packages.

``` javascript
var pkgs = findPkgs.sync();
// returns [...]
```

The function accepts the same `options` as `findPkgs()` above.

</section>

<!-- /.usage -->


<section class="examples">

## Examples

``` javascript
var findPkgs = require( '@stdlib/tools/pkgs/find' );

findPkgs( onPkgs );

function onPkgs( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: find-pkgs [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --pattern pattern     Inclusion glob pattern.
         --ignore pattern      Exclusion glob pattern.
```

</section>

<!-- /.usage -->


<section class="notes">

### Notes

* If not provided a `dir` argument, the current working directory is the search directory.

* To provide multiple exclusion glob patterns, set multiple `--ignore` option arguments.

  ``` bash
  $ find-pkgs --ignore=node_modules/** --ignore=build/** --ignore=reports/**
  ```

</section>

<!-- /.notes -->


<section class="examples">

### Examples

``` bash
$ find-pkgs
<package_path>
<package_path>
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
