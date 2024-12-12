import { posts } from "lib/content/posts";
import { Layout } from "lib/ui/layout";
import { Markdown } from "lib/ui/markdown";
import { PostItem } from "lib/ui/post-item";
import jsx from "lib/utils/jsx";
import aboutContent from "lib/content/about.md.txt";

const title = "SwiftAce";

function HomePage() {
  return (
    <Layout title={title} description={aboutContent}>
      <h1 className="page-heading">{title}</h1>
      <div>
        <Markdown content={aboutContent} />
      </div>

      <div>
        <h2 className="page-subheading" id="devlog">Development Log</h2>
        {posts.map((post) => (
          <PostItem {...post} />
        ))}
      </div>
    </Layout>
  );
}

export async function onRequestGet() {
  // @ts-ignore
  return new Response(<HomePage />, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
}
