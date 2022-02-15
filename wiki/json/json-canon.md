# [JSON Canonicalization Scheme (JCS)](https://datatracker.ietf.org/doc/html/rfc8785)

## Notes

- Way to create a reproducible hash value fromn the same json inputs.
- Sorting, removing redundant whitespace, etc..
- Can be combined with HMAC

## Links

- [Secure JSON Objects](https://connect2id.com/blog/how-to-secure-json-objects-with-hmac)

Example:

```json
{
  "key": "9cea8d2d",
  "name": "Alice Adams",
  "age": 21,
  "_hmac#s256": "MLE+O33O8Rv2fdSajlaK6h3wT8yKQkbNuPCoWDRWcz4="
}
```

- https://github.com/cyberphone/jws-ct#combining-detached-jws-with-jcs-json-canonicalization-scheme
