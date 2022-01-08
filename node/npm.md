# Npm

## Notes

- `npm init <specifier>` runs `npm exec create-<specifier>`. This looks in your path for that command and executes it
- `npm start --script-shell=<shell>` allows you to specify a shell other than `/bin/sh`
- `npx --ws -- eslint ./*.js` commands like this run in the context of each workspace

## Links

- [pacote](https://github.com/npm/pacote) - package manifest / tarball fetcher
- [npm-registry-fetch](https://www.npmjs.com/package/npm-registry-fetch)
- [promzard](https://github.com/npm/promzard) - prompting wizard for building files (used by npm)
- [init-pack-json](https://www.npmjs.com/package/init-package-json) - package.json creator
