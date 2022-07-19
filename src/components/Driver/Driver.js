
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
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';


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
  username,
  password,
  email,
  phone,
  creditCard,
  groupId,
  vehicleId,
  img,
  vehicleName,
  
) {
  return {  username, password, email, phone,creditCard, groupId,
     vehicleId, img, vehicleName, };
}
function handleDelete(e) {

  console.log('Delete Success');
}
function handleEdit(ed) {

  console.log('Edit Success');
}
const rows = [
  createData(1, 'uocne', 123, "uocnn140739@gmail.com", "Nguyễn Ngọc Uớc",'123 Nguyen Van Tang', '0123123123', 23109841,1,2,5,'https:/merry.blob.core.windows.net/yume/715840.jpg','Valkyrie','Mercedes màu xanh',0),
];

export default function Area() {
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
          const requestURL ='https://funtrip.azurewebsites.net/api/drivers?all=true&pageNumber=1&pageSize=10';
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
        
            
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Credit Card</StyledTableCell>
            <StyledTableCell align="center">GroupID</StyledTableCell>
            <StyledTableCell align="center">VehicleID</StyledTableCell>
            <StyledTableCell align="center">Images</StyledTableCell>
            <StyledTableCell align="center">Vehicle Name</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userInfo && userInfo.map((userInfo,index) => (
            <StyledTableRow key={index}>
              
              <StyledTableCell align="center">{userInfo.username}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.email}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.phone}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.creditCard}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.groupId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.vehicleId}</StyledTableCell>
              <StyledTableCell align="center"><Image src={userInfo.img} className="w-20 h-8"/></StyledTableCell>
              <StyledTableCell align="center">{userInfo.vehicleName}</StyledTableCell>
              <StyledTableCell align="center">
              <Button size="sm" color="amber" className='pl-6  flex flex-row text-red-500 text-lg bg-stone-50' onClick={handleEdit}><i class="fa fa-trash-alt"></i></Button>
              <Button size="sm" color="amber" className='pl-12 text-green-500 text-lg bg-stone-50'onClick={handleDelete}><i class="fa fa-edit"></i></Button>
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
