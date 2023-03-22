import ImageShow from '../image-show/image-show';

/* eslint-disable-next-line */
export interface ImageListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagesData: any[] | undefined;
}

export function ImageList(props: ImageListProps) {
  const renderedImages = props.imagesData?.map((imageData) => {
    return (
      <div key={imageData.id} className="column is-one-third">
        <ImageShow imageData={imageData}/>
      </div>
    )
  });

  return (
    <div className="columns is-multiline is-desktop">
        {renderedImages}
    </div>
  );
}

export default ImageList;
