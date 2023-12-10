import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { ModalBackdrop, ModalContent, Img} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {

      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    
    return createPortal (
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <button type="button" onClick={this.props.onClick}>
            Close
          </button>
          <Img src={this.props.url} alt={this.props.url}></Img>
        </ModalContent>
      </ModalBackdrop>,
       modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};