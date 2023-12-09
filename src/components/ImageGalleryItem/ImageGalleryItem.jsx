import PropTypes from 'prop-types'
import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, tags, id }) => {
    return (
        <GalleryItem class="gallery-item" key={id}>
        <img src={url} alt={tags} />
      </GalleryItem>
        )
}


ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };