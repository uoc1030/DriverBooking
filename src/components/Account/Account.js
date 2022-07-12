import React, {useEffect} from 'react';
import {  Link } from 'react-router-dom';
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
  id,
  username,
  password,
  email,
  roleId,
  status,
) {
  return { id, username, password, email, roleId, status };
}

const rows = [
  createData(1, 'uocnnse140739', '123', 'uocnnse140739@gmail.com', 1,'NULL'),
  
];

export default function Account() {
    const [page, setPage] = React.useState(0);
    const [userInfo, setUserInfo] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    

    // thêm
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
            const requestURL ='https://funtrip.azurewebsites.net/api/Account/1/10?all=true';
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
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">username</StyledTableCell>
            <StyledTableCell align="center">password</StyledTableCell>
            <StyledTableCell align="center">email</StyledTableCell>
            <StyledTableCell align="center">roleId</StyledTableCell>
            <StyledTableCell align="center">status</StyledTableCell>
            <StyledTableCell align="center">action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
            {userInfo && userInfo.map((userInfo,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{userInfo.id}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.username}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.password}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.email}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.roleId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.status}</StyledTableCell>
              <StyledTableCell align="center">
              <Link  to="/Admin/Edit" >
                  <p className='pl-6 text-green-500 text-lg'onClick={handleEdit}><i className="fa fa-edit"></i></p> 
              </Link>
              <p className='pl-6 float-right text-green-500 text-lg' onClick={handleDelete}><i className="fa fa-trash-alt"></i></p>
              
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
