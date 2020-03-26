import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  };

  return (
    <nav className='blue darken-3' style={{ marginBottom: '5rem' }}>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              required
              placeholder='Search for logs...'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
