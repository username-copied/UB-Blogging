import War from "../assets/blog.png";
import { Link } from "react-router-dom";

import React from "react";
export default function Post({ post }) {
  return (
    post && (
      <>
        <a
          href="#a"
          className="flex flex-col items-center bg-white rounded-lg border shadow-md lg:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover  hover:scale-90 ease-in-out duration-300 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={War}
            alt=""
          />

          <div className="flex flex-col justify-between p-4 leading-normal">
            <Link to={`/post/${post._id}`} className="link">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {post.desc}
            </p>
          </div>
        </a>
      </>
    )
  );
}
