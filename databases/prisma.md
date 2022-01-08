# Prisma

## Notes

- Prisma generates some nice data in `node_modules/.prisma/client` that can be parsed easily for typings etc.
- Interesting that they use a `.prisma` location. I think it has to do with the generated files

### How their generation works

- Their main `@prisma/client` install in `node_modules` is setup to export from the generated files.

```json package.json
{
  "main": "index.js",
  "types": "index.d.ts"
}
```

```js index.js
const prisma = require(".prisma/client/index");
const path = require("path");

module.exports = prisma;
// snip...
```

```ts index.d.ts
export * from ".prisma/client";
```

Seems like they have some backup files also
