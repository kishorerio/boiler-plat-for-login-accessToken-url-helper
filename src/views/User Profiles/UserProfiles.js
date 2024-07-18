import React, { useMemo } from 'react'
import Table from '../../components/TableComponent'
import { Status } from '../User Profiles/UserProfilesListCol'
import { Row, Card, CardBody, CardTitle, Container, Button, Col } from 'reactstrap'

function UserProfiles() {
  // Dummy data for the table
  const data = [
    {
      ipoNo: 'PO001',
      date: '2024-01-15',
      supplier: 'demo A',
      process: 'Process 1',
      soNo: 'SO123',
      status: 'Active',
    },
    {
      ipoNo: 'PO002',
      date: '2024-02-20',
      supplier: ' B',
      process: 'Process 2',
      soNo: 'SO124',
      status: 'Inactive',
    },
    {
      ipoNo: 'PO003',
      date: '2024-03-25',
      supplier: ' C',
      process: 'Process 3',
      soNo: 'SO125',
      status: 'Active',
    },
    {
      ipoNo: 'PO004',
      date: '2024-04-30',
      supplier: ' D',
      process: 'Process 4',
      soNo: 'SO126',
      status: 'Inactive',
    },
    {
      ipoNo: 'PO005',
      date: '2024-05-05',
      supplier: ' E',
      process: 'Process 5',
      soNo: 'SO127',
      status: 'Active',
    },
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'Live Job Request',
        accessor: 'ipoNo',
        filterable: true,
      },
      {
        Header: 'Job History',
        accessor: 'date',
        filterable: true,
      },
      {
        Header: 'Account Type',
        accessor: 'supplier',
        filterable: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        disableFilters: true,
        Cell: (cellProps) => {
          return <Status {...cellProps} />
        },
      },
      {
        Header: 'Referrals',
        accessor: 'soNo',
      },
    ],
    [],
  )

  return (
    <Container fluid={true}>
      {/* <Breadcrumbs title="Yarn" breadcrumbItem="PO Lists" /> */}
      <Row>
        <CardTitle className="mb-4 text">USERS PROFILES</CardTitle>
        <Card>
          <CardBody>
            <Table
              columns={columns}
              data={data}
              isGlobalFilter={true}
              isAddOptions={false}
              //   isJobListGlobalFilter={true}
              isPagination={true}
              iscustomPageSizeOptions={true}
              isShowingPageLength={true}
              customPageSize={5}
              tableClass="table-bordered align-middle nowrap mt-2"
              paginationDiv="col-sm-12 col-md-7"
              pagination="pagination justify-content-end pagination-rounded"
            />
          </CardBody>
        </Card>
      </Row>
    </Container>
  )
}

export default UserProfiles
