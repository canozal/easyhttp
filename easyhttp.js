const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

class EasyHttp {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  // Get Request
  get(url, cb) {
    this.http.onload = () => {
      if (this.http.status === 200) {
        cb(null, this.http.responseText);
      } else {
        cb('Error: ' + this.http.status);
      }
    };

    this.http.open('GET', url, true);
    this.http.send();
  }

  // Post request
  post(url, data, cb) {
    this.http.onload = () => {
      cb(null, this.http.responseText);
    };

    this.http.addEventListener('progress', (progress) => {
      console.log(progress);
    });

    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    this.http.send(JSON.stringify(data));
  }

  // Put request
  put(url, data, cb) {
    this.http.onload = () => {
      cb(null, this.http.responseText);
    };

    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    this.http.send(JSON.stringify(data));
  }

  // Delete Request
  delete(url, cb) {
    this.http.onload = () => {
      if (this.http.status === 200) {
        cb(null, this.http.responseText);
      } else {
        cb('Error: ' + this.http.status);
      }
    };

    this.http.open('DELETE', url, true);
    this.http.send();
  }
}

const http = new EasyHttp();
const response = http.get('https://jsonplaceholder.typicode.com/posts', print);

function print(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}
