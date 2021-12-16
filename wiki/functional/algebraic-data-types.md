Algebraic Data Types

## Notes

## Links

- [Gcanti - Algebraic Data Types](https://dev.to/gcanti/functional-design-algebraic-data-types-36kf)

A product type is a collection of types Ti indexed by a set I.

Two common members of this family are n-tuples, where I is a non empty interval of natural numbers...

```ts
type Tuple1 = [string]; // I = [0]
type Tuple2 = [string, number]; // I = [0, 1]
type Tuple3 = [string, number, boolean]; // I = [0, 1, 2]

// Accessing by index
type Fst = Tuple2[0]; // string
type Snd = Tuple2[1]; // number
```

and structs, where I is a set of labels.

```ts
type Tuple1 = [string]; // I = [0]
type Tuple2 = [string, number]; // I = [0, 1]
type Tuple3 = [string, number, boolean]; // I = [0, 1, 2]

// Accessing by index
type Fst = Tuple2[0]; // string
type Snd = Tuple2[1]; // number
```
