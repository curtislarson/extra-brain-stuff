# DDD

https://docs.microsoft.com/en-us/azure/architecture/microservices/model/tactical-ddd

| DDD                  | Rest       | Ex                                                 |
| -------------------- | ---------- | -------------------------------------------------- |
| Aggregate            | Resource   | { "1":1234, "status":"pending"... }                |
| Identity             | URL        | https://delivery-service/delivderies/1             |
| Child entities       | Links      | { "href": "/deliveries/1/confirmation" }           |
| Update value objects | Put/Patch  | https://delivery-service/deliveries/1/dropoff      |
| Repository           | Collection | https://delivery-service/deliveries?status=pending |

Domain and application services. In DDD terminology, a service is an object that implements some logic without holding any state. Evans distinguishes between domain services, which encapsulate domain logic, and application services, which provide technical functionality, such as user authentication or sending an SMS message. Domain services are often used to model behavior that spans multiple entities.

https://khalilstemmler.com/wiki/dependency-rule/
https://khalilstemmler.com/articles/domain-driven-design-intro/

```
And finally (and this is where most of the issues arise when building microservices), if your initial microservice needs data that's originally owned by other microservices, do not rely on making synchronous requests for that data. Instead, replicate or propagate that data (only the attributes you need) into the initial service's database by using eventual consistency (typically by using integration events, as explained in upcoming sections).

```

After you identify the microservices in your application, validate your design against the following criteria:

Each service has a single responsibility.
There are no chatty calls between services. If splitting functionality into two services causes them to be overly chatty, it may be a symptom that these functions belong in the same service.
Each service is small enough that it can be built by a small team working independently.
There are no inter-dependencies that will require two or more services to be deployed in lock-step. It should always be possible to deploy a service without redeploying any other services.
Services are not tightly coupled, and can evolve independently.
Your service boundaries will not create problems with data consistency or integrity. Sometimes it's important to maintain data consistency by putting functionality into a single microservice. That said, consider whether you really need strong consistency. There are strategies for addressing eventual consistency in a distributed system, and the benefits of decomposing services often outweigh the challenges of managing eventual consistency.

https://www.domainlanguage.com/wp-content/uploads/2016/04/GettingStartedWithDDDWhenSurroundedByLegodiacySystemsV1.pdf
