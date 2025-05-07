import {posts} from '@/app/lib/posts-data';
import Post from '@/app/ui/components/post/post';

export default function Page( { params }: { params: { id: string } }) {
    
    const post = posts.find((post) => post.id === params.id); // Find the post by ID

    if (!post || !post.id || !post.title || !post.content || !post.date) {
        return <h1>Post not found</h1>;
    }

    return (
        <>
        <h1>Post</h1>
            <Post {...post} />
        </>
        )
    
}