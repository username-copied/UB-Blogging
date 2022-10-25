import React, { useState, useEffect } from "react";
import TopBar from "../../src/components/Navbar";
import axios from "axios";
import { useLocation } from "react-router";
import War from "../assets/blog.png";
const BlogPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // console.log(path);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setContent(res.data.content);
      setAuthor(res.data.username);
    };
    getPost();
  }, [path]);

  return (
    <>
      <TopBar />
      <div className="flex flex-col m-4 p-4 justify-items-center items-center gap-8">
        <div className="flex flex-col md:flex-row gap-4 tracking-widest leading-loose">
          <img src={War} alt="Pic" />
          <div className="flex flex-col border-8 p-2 m-2">
            <span>Author: {author}</span>
            <span>Created On: {new Date(post.createdAt).toDateString()}</span>
            <span>
              Categories:{" "}
              <span className="bg-gray-300 rounded-md p-2">
                {post.categories}
              </span>
            </span>
          </div>
        </div>
        <div className="text-2xl font-bold tracking-widest">{title}</div>
        <div className="p-2 m-2 bg-gray-300 rounded-xl md:w-[70%] lg:w-[50%] ">
          {desc}
        </div>
        <div className="lg:mx-16 md:mx-8 sm:mx-4 text-xl font-sans subpixel-antialiased tracking-wide	">
          {content}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
