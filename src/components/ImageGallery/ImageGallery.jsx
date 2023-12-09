import PropTypes from 'prop-types';
import { Gallery, GalleryItem } from './ImageGallery.styled';


export const ImageGallery =({ galleryImg }) => {
 return (
 <Gallery>
    {galleryImg.map((item)=> (
        <GalleryItem
        key={item.id}
        tags={item.tags}
        webformatURL={item.webformatURL}
        largeImageURL={item.largeImageURL}
        >
        </GalleryItem>
    ))}

</Gallery>
    )
}


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