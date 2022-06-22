import * as React from 'react';
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

function createData(
  id: int,
  username: string,
  password: string,
  gmail: string,
  fullName: string,
  address: string,
  phone: string,
  creditCard: string,
  groupId: int,
  vehicleId: int,
  accountId: int,
  img: string,
  groupName: string,
  vehicleName: string,
  rate: int,
  
) {
  return { id, username, password, gmail, fullName, address, phone,creditCard, groupId,
     vehicleId, accountId, img, groupName, vehicleName, rate, };
}
function handleDelete(e) {

  console.log('Delete Success');
}
function handleEdit(ed) {

  console.log('Edit Success');
}
const rows = [
  createData('Frozen yoghurt', 1, 6.0, "uocne123", "uocnnse140739@fpt.edu.vn",'123 Nguyen Van Tang', '0123123123', 'Visa Card'),
  createData('Ice cream sandwich', 2, 9.0, "uocne123","uocnnse140739@fpt.edu.vn",'123 Nguyen Van Tang', '0123123123', 'Visa Card'),
  createData('Eclair', 3, 16.0, "uocne123", "uocnnse140739@fpt.edu.vn",'123 Nguyen Van Tang', '0123123123', 'Visa Card'),
  createData('Cupcake', 4, 3.7, "uocne123", "uocnnse140739@fpt.edu.vn",'123 Nguyen Van Tang', '0123456123', 'Visa Card'),
  createData('Gingerbread', 5, 16.0, "uocne123", "uocnnse140739@fpt.edu.vn",'123 Nguyen Van Tang', '0123456789', 'Visa Card'),
];

export default function Area() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
// async function featchAccountList() {
//         try {
//             const requestURL = http://127.0.0.1:8000/post/search_by_user_id?id=${localStorage.getItem('id-token')};
//             const response = await fetch(requestURL, {
//                 method: GET,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // 'Authorization': Bearer ${localStorage.getItem('user-token')},
//                 },
//             });
//             const responseJSON = await response.json();

//             const { data } = responseJSON;

//             setPostList(responseJSON);

//             return data
//         } catch (error) {
//             console.log('Fail to fetch product list: ', error)
//         }

//     }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
        
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">username</StyledTableCell>
            <StyledTableCell align="center">password</StyledTableCell>
            <StyledTableCell align="center">Gmail</StyledTableCell>
            <StyledTableCell align="center">FullName</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">CreditCard</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
 
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.password}</StyledTableCell>
              <StyledTableCell align="right">{row.mail}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.sugar}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.creditCard}</StyledTableCell>
              <StyledTableCell align="right">
              <p className='pl-12  float-right  text-green-500 text-lg' onClick={handleEdit}><i class="fa fa-trash-alt"></i></p>
              <p className='pl-12 text-green-500 text-lg'onClick={handleDelete}><i class="fa fa-edit"></i></p>
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
