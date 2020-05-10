import React, { Component, Fragment } from "react";
import axios from "axios";
class Comments extends Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    // Get All Comments For a particular Post.
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`
      )
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      });
  }

  render() {
    // Check if there is any comments returned and display accordingly
    let commentsList = this.state.comments.length ? (
      <ul className="collection">
        {this.state.comments.map((comment) => (
          <li
            key={comment.id}
            className="collection-item left-align grey lighten-2"
          >
            <p>
              <b>
                {comment.name} ({comment.email})
              </b>
            </p>
            <p>
              [id: {comment.id}] {comment.body}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <div>No Comments yet...</div>
    );

    return <Fragment>{commentsList} </Fragment>;
  }
}

export default Comments;
