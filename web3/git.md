# Git

## Notes

- `git hash-object` doesn't use a normal sha1 hash, rather it prepends the string "blob" followed by the file size and a `NUL` to the file's contents before hashing.

Example:

```zsh
printf 'blob 1\0a' > a
```


- git is responsible for managing content
- the name of a file is managed by the `tree`, or rather the directory content, which lists the file in a given folder