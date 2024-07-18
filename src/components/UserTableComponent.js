import React from 'react';
import { CSmartTable } from '@coreui/react-pro';
import styled from 'styled-components';

const StyledTableWrapper = styled.div`
  overflow-x: auto;

  .auto-width-table thead th,
  .auto-width-table tbody td {
    width: auto;
    white-space: nowrap;
  }
`;

const UsersTableComponent = ({ usersData }) => {
  return (
    <StyledTableWrapper>
      <CSmartTable
        items={usersData}
        columnFilter
        columnSorter
        pagination
        tableProps={{
          hover: true,
          className: 'auto-width-table',
        }}
      />
    </StyledTableWrapper>
  );
};

export default UsersTableComponent;
