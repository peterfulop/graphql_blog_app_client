import { Post } from '../../apollo/graphql-generated/types';
import { PostElement } from '../../components/post/post';
import { useGetPostsQuery } from '../../components/post/query/get-posts.generated';

export const Posts = () => {
  const { data, error, loading } = useGetPostsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error on loading posts</div>;
  }

  const posts = data.posts as Post[];

  return (
    <div>
      {posts.map((post: Post) => (
        <PostElement
          key={post.id}
          title={post.title}
          content={post.content}
          date={post.createdAt}
          id={post.id}
          user={post.user.name}
          published={post.published}
        />
      ))}
    </div>
  );
};
