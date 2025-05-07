import {posts} from '@/app/lib/posts-data';
import Post from '@/app/ui/components/post/post';


export default function Page() {
    return (
        <>
            <h1 className="font-bold text-4xl">Posts</h1>
            <div className="flex flex-col gap-4">
                {posts.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
                
        </>
    );
}