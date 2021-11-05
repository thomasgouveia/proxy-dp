// This is our base interface
interface IHttpService {
  get(): Promise<any>;
}

// This is a very basic implementation of an HttpService
class HttpService implements IHttpService {
  async get(): Promise<any> {
    // TODO
  }
}

// This is a very basic implementation of  a cached HttpService using the proxy
class CachedHttpService implements IHttpService {
  // TOOD: missing something here ...
  private cache: { [key: string]: any } = {};

  async get(): Promise<any> {
    // TODO
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
