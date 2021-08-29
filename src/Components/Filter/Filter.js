import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';

import styles from '../Form/Form.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder="Filter"
      onChange={e => dispatch(actions.changeFilter(e.target.value))}
    />
  );
};

export default Filter;
