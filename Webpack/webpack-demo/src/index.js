import Post from "./Post";
import './styles/styles.css'
import Logo from './assets/webpack-logo.png'

const post = new Post("title", "description", Logo)

console.log("Post to string:", post.toString())