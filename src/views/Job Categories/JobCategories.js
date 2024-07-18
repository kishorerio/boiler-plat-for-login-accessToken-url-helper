import React, { useMemo } from 'react'
import { Row, Card, CardBody, CardTitle, Container, Button, Col, Label, Input } from 'reactstrap'

function JobCategories() {
  // Dummy data for the table
  const data = [
    {
      user: 'Joe',
      userType: 'Seeker',
      ipoNo: 'PO001',
      date: '2024-01-15',
      supplier: 'demo A',
      process: 'Process 1',
      soNo: 'SO123',
    },
    {
      user: 'Cena',
      userType: 'Provider',
      ipoNo: 'PO001',
      date: '2024-01-15',
      supplier: 'demo A',
      process: 'Process 1',
      soNo: 'SO123',
    },
    {
      user: 'Joe',
      userType: 'Seeker',
      ipoNo: 'PO001',
      date: '2024-01-15',
      supplier: 'demo A',
      process: 'Process 1',
      soNo: 'SO123',
    },
    {
      user: 'Cena',
      userType: 'Provider',
      ipoNo: 'PO001',
      date: '2024-01-15',
      supplier: 'demo A',
      process: 'Process 1',
      soNo: 'SO123',
    },
    // Add more data as needed
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'User',
        accessor: 'user',
        filter: 'text',
      },
      {
        Header: 'User Type',
        accessor: 'userType',
        filter: 'text',
      },
      {
        Header: 'Total Payments',
        accessor: 'ipoNo',
        filter: 'text',
      },
      {
        Header: 'Commissions',
        accessor: 'date',
        filter: 'text',
      },
      {
        Header: 'Successful Payments',
        accessor: 'supplier',
        filter: 'text',
      },
      {
        Header: 'Failed Payments',
        accessor: 'soNo',
        filter: 'text',
      },
      {
        Header: 'Payment History',
        accessor: '',
        Cell: () => <Button color="primary">View</Button>,
      },
    ],
    [],
  )

  return (
    <Container fluid={true}>
      <Col>
        <Row>
          <CardTitle className="mb-4 text">ACCOUNTS DETAILS</CardTitle>
          <Card>
            <CardBody>
              <Row>
                <Col lg={3}></Col>
                <Col lg={3}>
                  <div className="mb-3">
                    <Label htmlFor="formrow-InputState">Add Categories</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="formrow-Input"
                      placeholder="Enter Category"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-end">
                <Col lg={3} className="d-flex justify-content-end">
                  <Button color="primary" className="mt-4">
                    Add Category
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Row>
      </Col>
    </Container>
  )
}

export default JobCategories
