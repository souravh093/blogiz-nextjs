import LoadingCard from "@/components/ui/LoadingCard";
import { TBlog } from "@/types";
import React from "react";

const BlogLoading = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: TBlog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoading;
