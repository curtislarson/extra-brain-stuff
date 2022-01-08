# Microservices

## Links

- [Jaeger Microservice article](https://eng.uber.com/crisp-critical-path-analysis-for-microservice-architectures/)

> The parent-child relationships come in 2 flavors: child-of and follows-from; the child-of relation represents a request-response relationship where the parent waits for the child (and its transitive closure) to finish; and the follow-from relation represents a “fire-and-forget” mode of operation where the parent does not wait for the child to finish.
> Every span also contains its host-local start time and duration of execution. Jaeger is language-independent, hence RPC calls through microservices written in myriad languages can be traced faithfully.

- Spans are start and ends of a service execution
- Spawn and sync events
