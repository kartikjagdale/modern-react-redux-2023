export interface ImageShowProps {
  imageData: any;
}

export function ImageShow(props: ImageShowProps) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            style={{ objectFit: 'contain' }}
            src={props.imageData.urls.regular}
            alt="searched copy"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={props.imageData.user.profile_image.medium}
                alt="user profile pic"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.imageData.user.name}</p>
            <p className="subtitle is-6">@{props.imageData.user.username}</p>
          </div>
        </div>

        <div className="content">
          <time dateTime={props.imageData.updated_at}>
              <h6>
              {new Date(props.imageData.updated_at).toLocaleDateString(
                'default',
                {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )}
              </h6>
          </time>
        </div>
      </div>
    </div>
  );
}

export default ImageShow;
