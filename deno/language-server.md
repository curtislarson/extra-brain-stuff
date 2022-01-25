# Language Server

Supports `HTTP_PROXY` and `HTTPS_PROXY` env variables.

- vscode extension will not resolve remote import maps
- vscode extension treats a single colon as something it should search for via url, but then wont resolve it unless its http or something
- deno also prefers the `deps.ts` approach
- We have to import the file extension if a prefix is not provided
