import { useGetPostsQuery } from '../../apollo/queries/post/post.generated';
import { PostElement } from '../../components/post/post';

export const Posts = () => {
  const { data, error, loading } = useGetPostsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error on loading posts</div>;
  }

  const posts = data.posts;

  return (
    <div>
      {posts.map((post) => (
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
