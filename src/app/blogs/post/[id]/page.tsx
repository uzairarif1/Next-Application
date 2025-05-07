// src/app/blogs/post/[id]/page.tsx

import { posts } from '@/app/lib/posts-data';
import Post from '@/app/ui/components/post/post';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostById(resolvedParams.id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <Post {...post} />
    </>
  );
}

// Mock async function (replace with real DB/API call if needed)
async function getPostById(id: string) {
  return posts.find((post) => post.id === id) || null;
}
