import React from "react";

function PostList(props) {
  const { posts, onClick } = props;

  return posts.map((item) => {
    return (
      <div key={item.id} onClick={() => onClick(item)}>
        <p>{item.title}</p>
      </div>
    );
  });
}

export default PostList;
