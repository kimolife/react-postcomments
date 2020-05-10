import React, { Component } from "react";
import Comments from "./comments";

class Post extends Component {
  state = {
    isActive: false,
  };
  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    const { postdata } = this.props;
    return (
      <div className="post card hoverable" key={postdata.id}>
        <div className="card-content">
          <span className="card-title blue-text">{postdata.title}</span>
          <p>
            (Post ID: {postdata.id}) {postdata.body}
          </p>
          <div style={{ margin: "10px" }} className="left-align">
            {this.state.isActive ? (
              <button
                style={{ backgroundColor: "white" }}
                onClick={this.handleHide}
              >
                Hide Comments
              </button>
            ) : (
              <button
                style={{ backgroundColor: "white" }}
                onClick={this.handleShow}
              >
                Show Comments
              </button>
            )}
          </div>
          {this.state.isActive ? (
            <Comments postId={postdata.id} key={postdata.id} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Post;
