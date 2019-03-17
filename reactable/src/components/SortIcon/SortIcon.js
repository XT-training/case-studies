import React from 'react';

const SortIcon = ({ order, currentTheme }) => {
  let sortClass = '';
  if(order === 'asc'){
    sortClass = currentTheme.sortAsc;
  } else if (order === 'desc') {
    sortClass = currentTheme.sortDesc;
  }
  return <span className={sortClass} />
}

export default SortIcon;
