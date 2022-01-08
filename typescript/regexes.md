# Regexes

## Notes

Useful regexes I've come across

```ts
const REGEX_FILE_NAME_OR_SPACE = /(\bimport\(".*?"\)|".*?")\.| /g;
const REGEX_TSCONFIG_NAME = /^.*\.json$/;
const REGEX_TJS_JSDOC = /^-([\w]+)\s+(\S|\S[\s\S]*\S)\s*$/g;
const REGEX_GROUP_JSDOC = /^[.]?([\w]+)\s+(\S|\S[\s\S]*\S)\s*$/g;
const REGEX_REQUIRE =
  /^(\s+)?require\((\'@?[a-zA-Z0-9.\/_-]+\'|\"@?[a-zA-Z0-9.\/_-]+\")\)(\.([a-zA-Z0-9_$]+))?(\s+|$)/;
```
