# Merkle

## Links

- [Merkle Clocks / DAGs / CRDT](https://arxiv.org/pdf/2004.00107.pdf)
  - This section formalizes the definition of Merkle-Clocks and their representation as Merkle-Clock DAGs. We will show that Merkle-Clock DAGs can be seen as a Growing-Set (G-Set) CRDT and therefore converge in multiple replicas.
  - Every new event in the system must be represented as a new root node to the existing Merkle-Clock DAG(s).
  - `Note`: Bad for cold starts
