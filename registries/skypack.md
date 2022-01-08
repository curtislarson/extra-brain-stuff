# [skypack](https://www.skypack.dev)

## Notes

Example urls

```sh
Lookup: https://cdn.skypack.dev/react
Resource: https://cdn.skypack.dev/-/react@16.13.1-HASH/dist=es2020/react.js
New: https://cdn.skypack.dev/new/preact@v1.2.3
Error: https://cdn.skypack.dev/error/node:fs
```

Example Error

```ts
/*
 * [Package Error] [Package Error] "fs" does not exist.
 *
 * The package "undefined" depends on this Node.js built-in module.
 * Node.js built-in modules (like "fs", "http", etc.) are Node.js-specific, and do
 * not exist in non-Node environments like Deno or the web browser. Skypack CDN polyfills
 * most of these modules for you automatically, but this one could not be polyfilled.
 *
 * How to fix:
 *   - Let the package author know that you'd like to run their package in the browser.
 *   - Use https://skypack.dev/ to find a web-friendly alternative to find another package.
 */

throw new Error('[Package Error] "fs" does not exist. ');
export default null;
```

## Links

- [Documentation](https://docs.skypack.dev/)

- [Public URLs](https://docs.skypack.dev/skypack-cdn/api-reference#public-urls)

  - Lookup urls are pointers to pinned urls
  - Pinned urls are a reference to an exact version (or hash) of something

- [Private URLs](https://docs.skypack.dev/skypack-cdn/api-reference/private-urls)

  - Resource urls load code from pkg, transform it, minify it, resolve imports
  - They also cache at cdn edge and browser
  - requests to a new url trigger a build
  - error urls provide user friendly error messages

- [Metadata](https://docs.skypack.dev/skypack-cdn/api-reference/package-metadata)
