import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from './DataTable';
import NavigationBar from './NavigationBar';

const columns = [
    { id: 'userName', label: 'UserName' },
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'email', label: 'Email' }
];

function UserManagement() {
    const [page] = useState(0);
    const [rowsPerPage] = useState(10);
    const [data, setData] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        fetchUsersData(rowsPerPage, page)
    }, []);

    function fetchUsersData(pageSize, pageNumber) {
        axios.get(`https://localhost:44307/api/v1/Account/User?pageSize=${pageSize}&pageNumber=${pageNumber + 1}`)
            .then(data => {
                setData(data.data.model)
                setItemCount(data.data.itemsCount)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleChangeRowsPerPage = (rowsPerPageCount, pageNumber) => {
        fetchUsersData(rowsPerPageCount, pageNumber)
    };

    const handleChangePage = (pageNumber) => {
        fetchUsersData(rowsPerPage, pageNumber);
    };

    return (
        <React.Fragment>
            <NavigationBar></NavigationBar>
            <DataTable data={data} columns={columns} itemCount={itemCount} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage}></DataTable>
        </React.Fragment>
    );
}

export default UserManagement
