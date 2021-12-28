# Modules

## Notes

- In [Package Entry Points](https://nodejs.org/api/packages.html#subpath-exports) it specifies `exports` overrides `main`. JSON modules are also a valid `export`.

> Warning: Introducing the "exports" field prevents consumers of a package from using any entry points that are not defined, including the package.json (e.g. require('your-package/package.json'). This will likely be a breaking change.