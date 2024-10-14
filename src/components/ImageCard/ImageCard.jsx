const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
