import css from './ContactFilter.module.css';

import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        onChange={e => {
          const { value } = e.target;
          const action = filterContact(value);
          dispatch(action);
        }}
      />
    </div>
  );
};
