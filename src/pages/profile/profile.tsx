import { useParams } from 'react-router';
import { useGetProfileQuery } from './query/get-proifle.generated';
import AddPostModal from '../../components/AddPostModal/add-post-modal';

export const Profile = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Mising UserId parameter</div>;
  }

  const { data } = useGetProfileQuery({
    variables: {
      userId: id,
    },
  });

  const profile = data?.getProfile;

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
        <div>{profile ? <AddPostModal /> : null}</div>
      </div>
      <div></div>
    </div>
  );
};
