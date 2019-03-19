import React from 'react';
import styled from '@emotion/styled';

const SortIcon = ({ className, order, currentTheme }) => {
  let sortClass = currentTheme.sort;
  if(order === 'asc'){
    sortClass = currentTheme.sortAsc;
  } else if (order === 'desc') {
    sortClass = currentTheme.sortDesc;
  }
  return <span className={`${sortClass} ${className}`} />
}

export default styled(SortIcon)`
  float: right;
  margin-right: 10px;
`;
