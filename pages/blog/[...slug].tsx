import { useRouter } from "next/router";

/*
  Catch-All routes
  - the filename starts with ... and is enclosed with []
  - examples
    - http://localhost:3000/blog/12
      - ["12"] 
    - http://localhost:3000/blog/12/1
      - ["12", "1"]
*/

function BlogPostsPage() {
  const router = useRouter();

  console.log("BlogPostsPage", router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
