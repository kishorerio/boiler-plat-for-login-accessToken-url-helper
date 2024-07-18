/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react'
import Table from '../../components/TableComponent'
import { Row, Card, CardBody, CardTitle, Container, Button, Col } from 'reactstrap'

function Invoices() {
  // Dummy data for the table
  const data = [
    {
      ipoNo: 'PO001',
      date: '2024-01-15',
      supplier: 'demo A',
      process: 'Process 1',
      soNo: 'SO123',
    },
    {
      ipoNo: 'PO002',
      date: '2024-02-20',
      supplier: ' B',
      process: 'Process 2',
      soNo: 'SO124',
    },
    {
      ipoNo: 'PO003',
      date: '2024-03-25',
      supplier: ' C',
      process: 'Process 3',
      soNo: 'SO125',
    },
    {
      ipoNo: 'PO004',
      date: '2024-04-30',
      supplier: ' D',
      process: 'Process 4',
      soNo: 'SO126',
    },
    {
      ipoNo: 'PO005',
      date: '2024-05-05',
      supplier: ' E',
      process: 'Process 5',
      soNo: 'SO127',
    },
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'User',
        accessor: 'ipoNo',
        filterable: true,
      },
      {
        Header: 'User Type',
        accessor: 'date',
        filterable: true,
      },
      {
        Header: 'Date',
        accessor: 'supplier',
        filterable: true,
      },
      {
        Header: 'Payments',
        accessor: '',
        filterable: true,
      },
      {
        Header: 'GST Details',
        accessor: 'soNo',
      },
      {
        Header: 'Commission Details',
        accessor: '',
      },
    ],
    [],
  )

  return (
    <Container fluid={true}>
      <Row>
        <CardTitle className="mb-4 text">CALL HISTORY</CardTitle>
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

export default Invoices
