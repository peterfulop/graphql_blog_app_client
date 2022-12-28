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
  const { date, published, isMyProfile, title, user, content } = props;

  const formatedDate = new Date(Number(date));
  return (
    <div
      className="Post"
      style={published === false ? { backgroundColor: 'hotpink' } : {}}
    >
      {isMyProfile && published === false && (
        <p className="Post__publish" onClick={() => null}>
          publish
        </p>
      )}
      {isMyProfile && published === true && (
        <p className="Post__publish" onClick={() => null}>
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
