# Esbuild

## Notes

> When the platform is set to node:

> The main fields setting is set to main,module. This means tree shaking will likely not happen for packages that provide both module and main since tree shaking works with ECMAScript modules but not with CommonJS modules.
> Unfortunately some packages incorrectly treat module as meaning "browser code" instead of "ECMAScript module code" so this default behavior is required for compatibility. You can manually configure the main fields setting to module,main if you want to enable tree shaking and know it is safe to do so.

- [Source](https://esbuild.github.io/api/#platform)

## Links

- [Esbuild](https://esbuild.org/)
