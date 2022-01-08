# Template Literals

## Notes

## Links

[Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

[Inference with Template Literals](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#inference-with-template-literals)

> The key insight that makes this possible is this: we can use a function with a generic such that:
>
> 1. The literal used in the first argument is captured as a literal type
> 2. That literal type can be validated as being in the union of valid attributes in the generic
> 3. The type of the validated attribute can be looked up in the generic’s structure using Indexed Access
> 4. This typing information can then be applied to ensure the argument to the callback function is of the same type
