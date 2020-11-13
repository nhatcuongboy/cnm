// import querystring from 'querystring';
import axios from 'axios';

export async function test() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

