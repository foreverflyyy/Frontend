import axios from "axios";

export default class PostService {
  static async GetAll() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  }
}