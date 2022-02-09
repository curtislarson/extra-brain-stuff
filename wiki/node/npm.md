# Npm

## Notes

`npm` is an amazing cli tool

- `npm init <specifier>` runs `npm exec create-<specifier>`. This looks in your path for that command and executes it
- `npm start --script-shell=<shell>` allows you to specify a shell other than `/bin/sh`
- `npx --ws -- eslint ./*.js` commands like this run in the context of each workspace
- `npx` has an interesting caching method. It looks like they genreate a package.json on the fly to make it easier to run the cli command?
- `npm run env -ws` prints env variables with the inserted `npm` ones for each package
- `npx` retrieves tarballs by default from regular urls (ie <kbd>npx https://curtis.computer</kbd>

- If you keep hitting an error like

```zsh
NODE_MODULE_VERSION 102. This version of Node.js requires
NODE_MODULE_VERSION 89. Please try re-compiling or re-installing
```

even after running `npm rebuild` you most likely need to run it with `--update-binary`.

```ts
npm rebuild better-sqlite3 --update-binary
```

See https://stackoverflow.com/questions/46384591/node-was-compiled-against-a-different-node-js-version-using-node-module-versio

## Links

- [pacote](https://github.com/npm/pacote) - package manifest / tarball fetcher
- [npm-registry-fetch](https://www.npmjs.com/package/npm-registry-fetch)
- [promzard](https://github.com/npm/promzard) - prompting wizard for building files (used by npm)
- [init-pack-json](https://www.npmjs.com/package/init-package-json) - package.json creator
- [algolia powered npm search](https://github.com/algolia/npm-search)
- [Replicate all modules in npm](https://replicate.npmjs.com/_all_docs)
