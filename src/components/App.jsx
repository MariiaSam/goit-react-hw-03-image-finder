import React, { Component } from 'react';
import { StyledApp } from './App.styled';

import { getImages } from 'serviсes/getImages';
import { SearchBar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    gallery: [],
    page: 1,
    error: null,
    isLoading: false,
    showModal: false,
    largeImage: '',
    loadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { query, page } = this.state;
      const prevQuery = prevState.query;
      const prevPage = prevState.page;

      if (query !== prevQuery || page !== prevPage) {
        await this.createImgGallery();
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleSearch = query => {
    this.setState({
      query,
      gallery: [],
      page: 1,
    });
  };

  createImgGallery = async () => {
    this.setState({ isLoading: true });
    const { query, page } = this.state;

    try {
      const { hits, totalHits } = await getImages(query, page);

      if (hits.length === 0) {
        this.setState({
          gallery: [],
          error: 'Invalid input. Please enter a valid value.',
        });
        return;
      }

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / 12),
        error: null,
      }));
    } catch (error) {
      console.log(error);
      this.setState({
        gallery: [],
        error: 'Message Err',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMoreImage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  onOpenModal = largeImage => {
    if (largeImage) {
      this.setState({ largeImage });
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { isLoading, showModal, largeImage, gallery, error, loadMore } =
      this.state;

    return (
      <StyledApp>
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery galleryImg={gallery} onClick={this.onOpenModal} />
        {isLoading && <Loader />}
        {showModal && <Modal onClick={this.toggleModal} url={largeImage} />}
        {error !== null ? <div>{error}</div> : null}
        {loadMore && <Button onLoadMore={this.onLoadMoreImage} />}
      </StyledApp>
    );
  }
}
