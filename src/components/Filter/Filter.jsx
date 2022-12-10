import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterField>
        Find contact by name:
        <Input
          type="text"
          name="filter"
          value={this.props.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.props.findContact}
          required
        />
      </FilterField>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  findContact: PropTypes.func.isRequired,
};
