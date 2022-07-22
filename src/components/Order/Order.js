import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Link } from 'react-router-dom';
import Search from "../Search";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(
  id,
  //userId,
  startTime,
  endTime,
  cost,
  //feedback,
  //rate,
  vehicleId,
  driverId,
  startLocationId,
  //endLocationId,
  isRoundTrip,
  address,
  employeeId,
  //driverName,
  //employeeName,
  //startLocation,
  //endLocation,
  //userName,
  //groupName,
  //districtOutsideName,
) {

  return {
    id,
    //userId,
    startTime,
    endTime,
    cost,
    //feedback,
    // rate,
    vehicleId,
    driverId,
    startLocationId,
    //endLocationId,
    isRoundTrip,
    address,
    employeeId,
    //driverName,
    //employeeName,
    //startLocation,
    //endLocation,
    //userName,
    //groupName,
    //districtOutsideName,
  };
}

const rows = [
  createData(1, 'uocnnse140739', '123', 'uocnnse140739@gmail.com', 1, 'NULL'),

];

export default function Account() {
  const [page, setPage] = React.useState(0);
  const [userInfo, setUserInfo] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    featchAccountList(search);
  
  }, [search])

  const callbackSearch = (childData) => {
    setSearch(childData)
};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function featchAccountList(key="") {
    try {
      const requestURL = 'https://funtrip.azurewebsites.net/api/orders?all=true&pageNumber=1&pageSize=10';
      //https://funtrip.azurewebsites.net/api/employees?name=&pageNumber=1&pageSize=10
      const response = await fetch(requestURL, {
        method: 'GET',
      });
      const responseJSON = await response.json();
      setUserInfo(responseJSON)

    } catch (error) {
      console.log('Fail to fetch product list: ', error)
    }
  }
  return (
    <div>
     <Link to='/admin/OrderCreate'><button className="flex  hover:text-white items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-green-700 dark:hover:bg-gray-700 bg-black text-white mb-10" >Create</button></Link>
      <TableContainer component={Paper}>
      <Search parentCallback={callbackSearch} />
      <Table sx={{ minWidth: 200 }} aria-label="customized table">   
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Start Time</StyledTableCell>
            <StyledTableCell align="center">End Time</StyledTableCell>
            <StyledTableCell align="center">Cost</StyledTableCell>
            <StyledTableCell align="center">VehicleID</StyledTableCell>
            <StyledTableCell align="center">DriverID</StyledTableCell>
            <StyledTableCell align="center">StartLocationID</StyledTableCell>
            <StyledTableCell align="center">Is Round Trip</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Employee Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo && userInfo.map((userInfo, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{userInfo.id}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.startTime}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.endTime}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.cost}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.vehicleId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.driverId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.startLocationId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.isRoundTrip}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.address}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.employeeId}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
    </div>
  );
}
