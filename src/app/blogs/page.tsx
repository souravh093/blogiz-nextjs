"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/types";
import React from "react";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const {
    data: blogs,
    isError,
    isLoading,
    isFetching,
    error,
  } = useGetBlogsQuery(undefined);

  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl font-semibold text-center my-5">
        All Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-500 italic max-w-2xl mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
