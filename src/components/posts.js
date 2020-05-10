import React, { Component } from "react";
import axios from "axios";
import Post from "./post";

class Posts extends Component {
  state = {
    posts: [],
    isActive: false,
  };

  componentDidMount() {
    //Get all the Posts from the API
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      let posts = res.data;

      this.setState({
        posts: posts,
      });
    });
  }

  render() {
    const { posts } = this.state;
    // Check if there are any Posts returned and display accordingly
    const postList = posts.length ? (
      posts.map((post) => {
        return <Post postdata={post} key={post.id} />;
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );

    return (
      <div className="container">
        <h4 className="center">All Posts</h4>
        {postList}
      </div>
    );
  }
}

export default Posts;
