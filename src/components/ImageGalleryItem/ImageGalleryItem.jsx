import PropTypes from 'prop-types'
import { GalleryItem, Img} from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({ id, url, tags, modalUrl, onClick }) => {
  const handleClick = () => {
    onClick({ target: { dataset: { image: modalUrl } } });
  };

  return (
    <GalleryItem key={id} onClick={handleClick}>
      <Img src={url} alt={tags} data-image={modalUrl} />
    </GalleryItem>
  );
};


ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    modalUrl:  PropTypes.string.isRequired,
  };