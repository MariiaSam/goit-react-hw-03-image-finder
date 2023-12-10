import { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, SearchForm, SearchFormBtn, SearchFormInput, SearchFormBtnLabel} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    value: '',
  };


  // при зміні значення у введенні. оновлює стан компонента, зберігаючи нове значення введеного тексту

hanlerChange = ({ target }) => {
this.setState({
value: target.value
})
}


  handleSubmit = evt => {
    evt.preventDefault()

    this.props.onSubmit(this.state.value)
    this.setState({ value: '' })
}

  render() {
    const { value } = this.state
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.hanlerChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
