 # Modules

## Notes

- In [Package Entry Points](https://nodejs.org/api/packages.html#subpath-exports) it specifies `exports` overrides `main`. JSON modules are also a valid `export`.

> Warning: Introducing the "exports" field prevents consumers of a package from using any entry points that are not defined, including the package.json (e.g. require('your-package/package.json'). This will likely be a breaking change.

- Prefer using `--preserve-symlinks` and `NODE_PATH` over custom require shims in order to run code

```
NODE_PATH=path[:…]#
Added in: v0.1.32
':'-separated list of directories prefixed to the module search path.

On Windows, this is a ';'-separated list instead.
```

```
NODE_PRESERVE_SYMLINKS=1#
Added in: v7.1.0
When set to 1, instructs the module loader to preserve symbolic links when resolving and caching modules.


```
