/*jshint strict:false */
/* jshint node: true */
"use strict";
// Pedimos la memoria usada
var mem = process.memoryUsage();
// Calcularlo en Kb
var memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024),
    heapUsed: parseInt(mem.heapUsed / 1024),
    external: parseInt(mem.external / 1024),
};

function primeraFuncion() {
    console.log(memKb);
    // process.exit(1);
    process.chdir("../");
}

function segundaFuncion() {
    console.log(process.cwd());
    // Información del entorno de usario
    console.log(process.env);
}

function terceraFuncion() {
    primeraFuncion();
    segundaFuncion();

    // Tiempo de uso de la CPU
    var startUsage = process.cpuUsage();

    var now = Date.now();
    while (Date.now() - now < 500);
    // Tiempo pasado en micro segundos
    console.log(process.cpuUsage(startUsage));
}
terceraFuncion();

// uglifyjs 02-uglify-ejemplo.js -o 02-ugly-fich.min.js


// uglifyjs input.js [options]
// The available options are:

//   --source-map                  Specify an output file where to generate source
//                                 map.
//   --source-map-root             The path to the original source to be included
//                                 in the source map.
//   --source-map-url              The path to the source map to be added in //#
//                                 sourceMappingURL.  Defaults to the value passed
//                                 with --source-map.
//   --source-map-include-sources  Pass this flag if you want to include the
//                                 content of source files in the source map as
//                                 sourcesContent property.
//   --source-map-inline           Write base64-encoded source map to the end of js output.
//   --in-source-map               Input source map, useful if you're compressing
//                                 JS that was generated from some other original
//                                 code. Specify "inline" if the source map is included
//                                 inline with the sources.
//   --screw-ie8                   Use this flag if you don't wish to support
//                                 Internet Explorer 6/7/8.
//                                 By default UglifyJS will not try to be IE-proof.
//   --support-ie8                 Use this flag to support Internet Explorer 6/7/8.
//                                 Equivalent to setting `screw_ie8: false` in `minify()`
//                                 for `compress`, `mangle` and `output` options.
//   --expr                        Parse a single expression, rather than a
//                                 program (for parsing JSON)
//   -p, --prefix                  Skip prefix for original filenames that appear
//                                 in source maps. For example -p 3 will drop 3
//                                 directories from file names and ensure they are
//                                 relative paths. You can also specify -p
//                                 relative, which will make UglifyJS figure out
//                                 itself the relative paths between original
//                                 sources, the source map and the output file.
//   -o, --output                  Output file (default STDOUT).
//   -b, --beautify                Beautify output/specify output options.
//   -m, --mangle                  Mangle names/pass mangler options.
//   -r, --reserved                Reserved names to exclude from mangling.
//   -c, --compress                Enable compressor/pass compressor options, e.g.
//                                 `-c 'if_return=false,pure_funcs=["Math.pow","console.log"]'`
//                                 Use `-c` with no argument to enable default compression
//                                 options.
//   -d, --define                  Global definitions
//   -e, --enclose                 Embed everything in a big function, with a
//                                 configurable parameter/argument list.
//   --comments                    Preserve copyright comments in the output. By
//                                 default this works like Google Closure, keeping
//                                 JSDoc-style comments that contain "@license" or
//                                 "@preserve". You can optionally pass one of the
//                                 following arguments to this flag:
//                                 - "all" to keep all comments
//                                 - a valid JS RegExp like `/foo/` or `/^!/` to
//                                 keep only matching comments.
//                                 Note that currently not *all* comments can be
//                                 kept when compression is on, because of dead
//                                 code removal or cascading statements into
//                                 sequences.
//   --preamble                    Preamble to prepend to the output.  You can use
//                                 this to insert a comment, for example for
//                                 licensing information.  This will not be
//                                 parsed, but the source map will adjust for its
//                                 presence.
//   --stats                       Display operations run time on STDERR.
//   --acorn                       Use Acorn for parsing.
//   --spidermonkey                Assume input files are SpiderMonkey AST format
//                                 (as JSON).
//   --self                        Build itself (UglifyJS2) as a library (implies
//                                 --wrap=UglifyJS --export-all)
//   --wrap                        Embed everything in a big function, making the
//                                 “exports” and “global” variables available. You
//                                 need to pass an argument to this option to
//                                 specify the name that your module will take
//                                 when included in, say, a browser.
//   --export-all                  Only used when --wrap, this tells UglifyJS to
//                                 add code to automatically export all globals.
//   --lint                        Display some scope warnings
//   -v, --verbose                 Verbose
//   -V, --version                 Print version number and exit.
//   --noerr                       Don't throw an error for unknown options in -c,
//                                 -b or -m.
//   --bare-returns                Allow return outside of functions.  Useful when
//                                 minifying CommonJS modules and Userscripts that
//                                 may be anonymous function wrapped (IIFE) by the
//                                 .user.js engine `caller`.
//   --keep-fnames                 Do not mangle/drop function names.  Useful for
//                                 code relying on Function.prototype.name.
//   --reserved-file               File containing reserved names
//   --reserve-domprops            Make (most?) DOM properties reserved for
//                                 --mangle-props
//   --mangle-props                Mangle property names (default `0`). Set to
//                                 `true` or `1` to mangle all property names. Set
//                                 to `unquoted` or `2` to only mangle unquoted
//                                 property names. Mode `2` also enables the
//                                 `keep_quoted_props` beautifier option to
//                                 preserve the quotes around property names and
//                                 disables the `properties` compressor option to
//                                 prevent rewriting quoted properties with dot
//                                 notation. You can override these by setting
//                                 them explicitly on the command line.
//   --mangle-regex                Only mangle property names matching the regex
//   --name-cache                  File to hold mangled names mappings
//   --pure-funcs                  Functions that can be safely removed if their
//                                 return value is not used, e.g.
//                                 `--pure-funcs Math.floor console.info`
//                                 (requires `--compress`)