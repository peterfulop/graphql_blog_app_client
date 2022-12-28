import { usePostPublishMutation } from '../../apollo/queries/post/post.generated';
import './Post.css';

type PostProps = {
  title: string;
  content: string;
  date: string;
  user: string;
  published: boolean;
  id: string;
  isMyProfile?: boolean;
};

export const PostElement = (props: PostProps): JSX.Element => {
  const { date, published, isMyProfile, title, user, content, id } = props;

  const [publishPostMutation] = usePostPublishMutation();

  const formatedDate = new Date(Number(date));
  return (
    <div
      className="Post"
      style={published === false ? { backgroundColor: 'hotpink' } : {}}
    >
      {isMyProfile && !published && (
        <p
          className="Post__publish"
          onClick={async () =>
            await publishPostMutation({
              variables: {
                input: {
                  postId: id,
                  published: true,
                },
              },
            })
          }
        >
          publish
        </p>
      )}
      {isMyProfile && published && (
        <p
          className="Post__publish"
          onClick={async () =>
            await publishPostMutation({
              variables: {
                input: {
                  postId: id,
                  published: false,
                },
              },
            })
          }
        >
          unpublish
        </p>
      )}
      <div className="Post__header-container">
        <h2>{title}</h2>
        <h4>
          Created At {`${formatedDate}`.split(' ').splice(0, 3).join(' ')} by{' '}
          {user}
        </h4>
      </div>
      <p>{content}</p>
    </div>
  );
};
