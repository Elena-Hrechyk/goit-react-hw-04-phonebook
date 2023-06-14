import PropTypes from 'prop-types';
import { BoxFilter, LableFilter, InputFilter } from './Filter.styled';

export const Filter = ({ filter, onSearchContact }) => {
  return (
    <>
      <BoxFilter>
        <LableFilter>
          Filter contacts by Name
          <InputFilter
            type="text"
            name="filter"
            value={filter}
            onChange={onSearchContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </LableFilter>
      </BoxFilter>
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.string,
  onSearchContact: PropTypes.func,
};
