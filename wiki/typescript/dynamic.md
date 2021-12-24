# Dynamic

## Notes

> To make the typescript compiler check code with dynamic property names, we can use index types. We can use the extends keyof keyword combination to denote that the type has the property names of another type.

- https://levelup.gitconnected.com/typescript-advanced-types-this-type-and-dynamic-types-ecb99c4ec275

Something like this is pretty neat:

```ts
export type FS = ExpandRecursively<typeof import("fs/promises")>;
```

## Links

- [this type](https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype)
