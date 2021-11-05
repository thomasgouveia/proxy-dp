import axios from "axios";

// This is our base interface
interface IHttpService {
  get(): Promise<any>;
}

// This is a very basic implementation of an HttpService
class HttpService implements IHttpService {
  async get(): Promise<any> {
    console.log("Real HTTP call");
    return axios.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}

// This is a very basic implementation of  a cached HttpService using the proxy
class CachedHttpService implements IHttpService {
  private readonly httpService = new HttpService();
  private cache: { [key: string]: any } = {};

  async get(): Promise<any> {
    if (this.cache["todo"]) {
      console.log("Returning cached data");
      return this.cache["todo"];
    }
    const { data } = await this.httpService.get();
    this.cache["todo"] = data;
    return data;
  }
}

// Create the HTTP Service
const httpService = new CachedHttpService();

const main = async () => {
  // First call will not use the cache
  let data = await httpService.get();

  console.log(data);

  // Second call will use te cache
  data = await httpService.get();

  console.log(data);
};

main();
