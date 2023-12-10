import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';


export const ImageGallery = ({ galleryImg, onClick }) => {
  return (
    <Gallery>
      {galleryImg.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          tags={tags}
          modalUrl={largeImageURL}
          onClick={onClick}
        />
      ))}
    </Gallery>
  );
};


ImageGallery.propTypes = {
    galleryImg: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };