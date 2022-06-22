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
  id:int,
  username: string,
  password: string,
  email: string,
  roleId: int,
  status: string,
) {
  return { id, username, password, email, roleId, status };
}
function handleDelete(e) {

  console.log('Delete Success');
}
function handleEdit(ed) {

  console.log('Edit Success');
}
const rows = [
  createData(1, 'uocnnse140739', '123', 'uocnnse140739@gmail.com', 1,'NULL'),
  createData(2, 'uocnnse140739', '123', 'uocnnse140739@gmail.com',  1,'NULL'),
  createData(3,'uocnnse140739', '123', 'uocnnse140739@gmail.com', 1,'NULL'),
  createData(4, 'uocnnse140739','123', 'uocnnse140739@gmail.com', 1,'NULL'),
  createData(5, 'uocnnse140739', '123', 'uocnnse140739@gmail.com', 1,'NULL'),
];

export default function Account() {
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
        
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">username</StyledTableCell>
            <StyledTableCell align="right">password</StyledTableCell>
            <StyledTableCell align="right">email</StyledTableCell>
            <StyledTableCell align="right">roleId</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
            <StyledTableCell align="right">action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              
              
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.password}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.roleId}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">
              <p className='pl-6 float-right text-green-500 text-lg' onClick={handleEdit}><i class="fa fa-trash-alt"></i></p>
              <p className='pl-6 text-green-500 text-lg'onClick={handleDelete}><i class="fa fa-edit"></i></p>
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
