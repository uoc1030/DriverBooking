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
function handleDelete(e) {

  console.log('Delete Success');
}
function handleEdit(ed) {

  console.log('Edit Success');
}
function createData(
  id: number,
  category: string,
  numberOfCars: number,
  
) {
  return { id,category,numberOfCars };
}

const rows = [
  createData(1, 'NULL', 23566),
  createData(2, 'NULL',23356),
  createData(3, 'NULL', 25587),
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
        
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">numberOfCars</StyledTableCell>
            <StyledTableCell align="right">action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              
              
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.numberOfCars}</StyledTableCell>
              
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
