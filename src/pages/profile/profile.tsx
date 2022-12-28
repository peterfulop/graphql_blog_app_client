import { useParams } from 'react-router';
import { useGetProfileQuery } from '../../apollo/queries/profile/profile.generated';
import AddPostModal from '../../components/AddPostModal/add-post-modal';
import { PostElement } from '../../components/post/post';

export const Profile = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Mising UserId parameter</div>;
  }

  const { data, loading, error } = useGetProfileQuery({
    variables: {
      userId: id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error on loading posts</div>;
  }

  const { getProfile: profile } = data;

  return (
    <div>
      <div
        style={{
          marginBottom: '2rem',
          display: 'flex ',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h1>{profile?.user.name}</h1>
          <p>{profile?.bio}</p>
        </div>
        <div>{profile?.isMyProfile ? <AddPostModal /> : null}</div>
      </div>
      <div>
        {profile?.user.posts.map((post) => {
          return (
            <PostElement
              key={post.id}
              title={post.title}
              content={post.content}
              date={post.createdAt}
              id={post.id}
              user={profile.user.name}
              published={post.published}
              isMyProfile={profile.isMyProfile}
            />
          );
        })}
      </div>
    </div>
  );
};
