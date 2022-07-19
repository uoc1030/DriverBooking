import React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';


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


function handleDelete(e) {

  console.log('Delete Success');
}
function handleEdit(ed) {

  console.log('Edit Success');
}
function createData(
  //id,
  //userId,
  //startTime,
  //endTime,
  cost,
  feedback,
  //rate,
  vehicleId,
  driverId,
  startLocationId,
  endLocationId,
  //isRoundTrip,
  address,
  employeeId,
  //driverName,
  //employeeName,
  startLocation,
  endLocation,
  //userName,
  //groupName,
  //districtOutsideName,
) {

  return {
  //id,
  //userId,
  //startTime,
  //endTime,
  cost,
  feedback,
 // rate,
  vehicleId,
  driverId,
  startLocationId,
  endLocationId,
  address,
  employeeId,
  //driverName,
  //employeeName,
  startLocation,
  endLocation,
  //userName,
 //groupName,
 //districtOutsideName,
 };
}

const rows = [
  createData(1, 'uocnnse140739', '123', 'uocnnse140739@gmail.com', 1,'NULL'),
  
];

export default function Account() {
    const [page, setPage] = React.useState(0);
    const [userInfo, setUserInfo] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    useEffect(() => {
      featchAccountList();
    }, [])
   
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    async function featchAccountList() {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">DriverID</StyledTableCell>
            <StyledTableCell align="center">VehicleID</StyledTableCell>
            <StyledTableCell align="center">EmployeeID</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">StartLocation</StyledTableCell>
            <StyledTableCell align="center">StartLocationID</StyledTableCell>
            <StyledTableCell align="center">EndLocation</StyledTableCell>
            <StyledTableCell align="center">EndLocationID</StyledTableCell>
            <StyledTableCell align="center">Cost</StyledTableCell>
            <StyledTableCell align="center">Feedback</StyledTableCell>
            
            <StyledTableCell align="center">action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
            {userInfo && userInfo.map((userInfo,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{userInfo.driverId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.vehicleId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.employeeId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.address}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.startLocation}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.startLocationId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.endLocation}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.endLocationId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.cost}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.feedback}</StyledTableCell>
              <StyledTableCell align="center">
              <p className='pl-6 float-right text-green-500 text-lg' onClick={handleEdit}><i className="fa fa-trash-alt"></i></p>
              <p className='pl-6 text-green-500 text-lg'onClick={handleDelete}><i className="fa fa-edit"></i></p>
              </StyledTableCell>
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
  );
}
