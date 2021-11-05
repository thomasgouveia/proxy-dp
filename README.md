# Proxy Lab

Clone the repository and install the dependencies :

```
npm install
```

You have to simulate a cached http service using the Proxy design pattern.
You can use for example the following API to get a random todo : https://jsonplaceholder.typicode.com/todos/1.

In the `index.ts` file, you'll find a main function and an interface `IHttpService`, and 2 empty classes `HttpService` and `CachedHttpService`. You should implements them.

The process is simple :

Your `HttpService` should execute a simple get on your API.

Your `CachedHttpService` should execute the real http call only if there is no entry in the cache. (to keep simple here, the cache is just an object which associates a key with a value)

**Estimated time : ~10min**

If everything is ok, you should obtain something like this in the console :

```
Real HTTP call
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
Returning cached data
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```
