import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
