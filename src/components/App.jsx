import React, { Component } from 'react';
import { StyledApp } from './App.styled';
// import { getImages } from 'services/getImages'; 
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    gallery: [],
    page: 1,
    error: null,
    isLoading: false,
    LoadMore: false,
    showModal: false,
  };

  handleSearch = (value) => {
    this.setState({
      query: value,
      gallery: [],
      page: 1,
    });
  };

  render() {
    const {gallery} = this.state

    return (
      <StyledApp>
        <SearchBar onSubmit={this.handleSearch} />

        <ImageGallery galleryImg={gallery}></ImageGallery>
      </StyledApp>
    );
  }
}
