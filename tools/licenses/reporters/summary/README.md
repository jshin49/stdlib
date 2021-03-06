# Summary

> Reporter which summarizes license results.


<section class="intro">

</section>

<!-- /.intro -->


<section class="usage">

## Usage

``` javascript
var reporter = require( '@stdlib/tools/licenses/reporters/summary' );
```

#### reporter( results )

Summarizes license results.

``` javascript
var licenses = require( '@stdlib/tools/licenses/licenses' );

licenses( onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( reporter( results ) );
}
```

</section>

<!-- /.usage -->


<section class="examples">

<!-- ## Examples

``` javascript

``` -->

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: licenses-summary [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
```

</section>

<!-- /.usage -->


<section class="notes">

### Notes

* Use as part of a standard stream pipeline.

</section>

<!-- /.notes -->


<section class="examples">

### Examples

``` bash
$ licenses | licenses-summary
```

Example output:

``` text

License summary:

Dependencies: 925
Licenses: 32
Invalid SPDX ids: 85 (9%)
Missing licenses: 11 (1%)
Ambiguous licenses: 29 (3%)

Licenses:
├── 718 (78%): MIT
├── 90 (10%): ISC
├── 28 (3%): BSD-3-Clause
├── 25 (3%): BSD
├── 19 (2%): BSD-2-Clause
├── 15 (2%): Apache-2.0
├── 11 (1%): UNKNOWN
├── 10 (1%): MPL-2.0
├── 10 (1%): MIT/X11
├── 7 (1%): WTFPL
├── 2 (0%): BSD-like
├── 1 (0%): LGPL
├── 1 (0%): BSD*
├── 1 (0%): Apache License, Version 2.0
├── 1 (0%): BSD-3-Clause AND MIT
├── 1 (0%): BSD-4-Clause
├── 1 (0%): (BSD-2-Clause OR MIT)
├── 1 (0%): BSL-1.0
├── 1 (0%): Creative Commons
├── 1 (0%): GPL
├── 1 (0%): AFLv2.1
├── 1 (0%): Artistic-2.0
├── 1 (0%): (WTFPL OR MIT)
├── 1 (0%): MIT AND BSL-1.0
├── 1 (0%): (MIT OR Apache-2.0)
├── 1 (0%): (MIT AND JSON)
├── 1 (0%): Public Domain
├── 1 (0%): Public domain
├── 1 (0%): SEE LICENSE IN COPYING.txt
├── 1 (0%): (MIT AND CC-BY-3.0)
├── 1 (0%): Unlicense
└── 1 (0%): (BSD-2-Clause OR MIT OR Apache-2.0)

```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
