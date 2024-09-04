import BlogDetails from "@/components/ui/BlogDetails";
import { TBlog } from "@/types";

interface TBlogId {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();
  return data.slice(0, 3).map((blog: TBlog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: TBlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <BlogDetails blog={data} />
    </div>
  );
};

export default BlogDetailsPage;
