class ApiClient {
    host: string;
    
    constructor() {
      this.host = process.env.REACT_APP_API_PRODUCTS!;
    }
  
    fetch(url: string, method = 'GET', body?: any) {
      return fetch(this.host + url, {
        method: method,
        body: body,
        headers: {
          'Content-type': 'application/json',
        },
      });
    }
  }
  
  export default ApiClient;