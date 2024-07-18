/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from 'react'
import Table from '../../components/TableComponent'
import { Status } from './ListOfUsersListCol'
import { Row, Card, CardBody, CardTitle, Container, Button, Col } from 'reactstrap'
import UsersTableComponent from '../../components/UserTableComponent'
import { get } from '../../helpers/api_helper';
import { LIST_OF_USERS } from '../../helpers/url_helper';

function ListOfUsers() {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListOfUsers = async () => {
      setLoading(true);
      try {
        const response = await get(`${LIST_OF_USERS}`);
        console.log(response);
        setListOfUsers(response || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListOfUsers();
  }, []);

  console.log(listOfUsers.data);

  // Assuming your JSON data structure is stored in a variable named `jsonData`
  const jsonData = [
    {
      _id: '668f7ab5e1d5c061ea43f1f2',
      userName: [{ firstName: 'tamilarasan' }, { lastName: '' }],
      createdAt: '2024-07-11T06:24:53.509Z',
      purpose: 'I can take a task',
    },
  ]

  // Function to determine user type based on purpose
  const getUserType = (purpose) => {
    if (purpose === 'I can take a task') {
      return 'Job Seeker'
    } else if (purpose === 'I have a task') {
      return 'Job Provider'
    } else {
      return 'Unknown' 
    }
  }

  // Prepare data for the table
  const tableData = jsonData.map((user) => ({
    id: user._id,
    userType: getUserType(user.purpose),
    userName: `${user.userName[0].firstName} ${user.userName[1].lastName}`,
    registrationDate: new Date(user.createdAt).toLocaleDateString(), // Format date as needed
  }))

  return (
    <Container fluid={true}>
      <Row>
        <CardTitle className="mb-4 text">LIST OF USERS</CardTitle>
        <Card>
          <CardBody>
            <UsersTableComponent usersData={tableData} />
          </CardBody>
        </Card>
      </Row>
    </Container>
  )
}

export default ListOfUsers
