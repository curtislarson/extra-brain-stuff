# Compiler Notes

## Notes

<https://basarat.gitbook.io/typescript/overview/binder>

> While the above architecture is true as a simplified understanding of TypeScript js generation, a key feature of TypeScript is its Semantic system. In order to assist type checking (performed by the checker), the binder (in binder.ts) is used to connect the various parts of the source code into a coherent type system that can then be used by the checker. The main responsibility of the binder is to create Symbols.

- Looks like Parcel tries to poke typescript enough times until it generates validators / typings for them (https://github.com/parcel-bundler/parcel/blob/v2/packages/validators/typescript/src/TypeScriptValidator.js)

`NodeFactory` for codegen

```ts
export interface NodeFactory {
    createNodeArray<T extends Node>(elements?: readonly T[], hasTrailingComma?: boolean): NodeArray<T>;
    createNumericLiteral(value: string | number, numericLiteralFlags?: TokenFlags): NumericLiteral;
    createBigIntLiteral(value: string | PseudoBigInt): BigIntLiteral;
    createStringLiteral(text: string, isSingleQuote?: boolean): StringLiteral;
    createStringLiteralFromNode(sourceNode: PropertyNameLiteral, isSingleQuote?: boolean): StringLiteral;
    createRegularExpressionLiteral(text: string): RegularExpressionLiteral;
    createIdentifier(text: string): Identifier;
...etc...
```

```ts
function createInstallTypingsRequest(
  project: Project,
  typeAcquisition: TypeAcquisition,
  unresolvedImports: SortedReadonlyArray<string>,
  cachePath?: string
): DiscoverTypings;
```

## Links

- [TypeScript Compiler Internals](https://basarat.gitbook.io/typescript/overview)

- [NodeTypingsInstaller](https://github.com/microsoft/TypeScript/blob/main/src/tsserver/nodeServer.ts#L415) - seems like a good spot to inject code in via the typings installer. It's communicated with via node ipc so we should be able to talk to it. It also stores a "safe list" as just a json file that it seems to trust more for some reason.

Another version of [NodeTypingsInstaller](https://github.com/quackware/TypeScript/blob/main/src/typingsInstaller/nodeTypingsInstaller.ts#L79)

[typingsInstaller.ts](https://github.com/quackware/TypeScript/blob/main/src/typingsInstallerCore/typingsInstaller.ts)

[extractWatchDirectoryCacheKey](https://github.com/microsoft/TypeScript/blob/main/src/tsserver/nodeServer.ts#L338)

-
