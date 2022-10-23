import React from "react";
import "flowbite";
import Post from "./Post";
import "animate.css";

const Posts = ({ posts }) => {
  return (
    <>
      <p className="text-center text-2xl font-extrabold p-4 m-4">Our Blogs</p>
      <div className="bg-gray-200 p-4 m-4 rounded-2xl">
        <div className="grid md:grid-cols-2 justify-center justify-items-center p-4 m-4 gap-16 ">
          {posts.map((post, index) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
