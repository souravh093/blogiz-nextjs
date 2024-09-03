import BlogDetails from "@/components/ui/BlogDetails";

interface TBlogId {
  params: {
    blogId: string;
  };
}

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
