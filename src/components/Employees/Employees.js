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
import {NavLink } from 'react-router-dom';
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
// hàm Delete
async function handleDelete(userInfo) {

  let res = await fetch(`https://funtrip.azurewebsites.net/api/employees/${userInfo?.id}`, {
      method: `DELETE`,
      headers: {
          'Content-Type': 'application/json',

      },
  }).then(res => res.json())
      .then(result => {

          if (result?.resultCode === 1) {
             
            
          } else {
              alert("delete thất bại")
          }
          return res

      })
      .catch((error) => {
          throw ('Invalid Token')
      })
  return res
}

function createData(
  id,
  username,
  password,
  fullName,
  gmail,
  accountId,
) {
  return { id, username, password, fullName,gmail,accountId };
}

const rows = [
  createData(1, 'uocnnse140739', '123', "Nguyễn Ngọc Uớc", "uocnnse140739@fpt.edu.vn",'1122')
];

export default function Area() {
    const [page, setPage] = React.useState(0);
    const [userInfo, setUserInfo] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [search, setSearch] = React.useState("");

    const callbackSearch = (childData) => {
      setSearch(childData)
  };
  
  useEffect(() => {
    featchAccountList(search);
  
  }, [search])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

async function featchAccountList() {
        try {
            const requestURL = 'https://funtrip.azurewebsites.net/api/employees';
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
      <Search parentCallback={callbackSearch} />
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">username</StyledTableCell>
            <StyledTableCell align="center">password</StyledTableCell>
            <StyledTableCell align="center">FullName</StyledTableCell>
            <StyledTableCell align="center">Gmail</StyledTableCell>
            <StyledTableCell align="center">AccountId</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo && userInfo.map((userInfo,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{userInfo.id}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.username}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.password}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.fullName}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.gmail}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.accountId}</StyledTableCell>
              <StyledTableCell align="center">
              <p className='pl-6 float-right text-green-500 text-lg'  onClick={() => handleDelete(userInfo) }><i class="fa fa-trash-alt"></i></p>
              <NavLink activeStyle={{ color: '#3481C8' }} to={{
                                        pathname: `/Admin/EmployeesEdit/${userInfo.id}`,
                                        state: {
                                            name: userInfo
                                        }
                                    }}
                                   > <p className='pl-6 text-green-500 text-lg'><i className="fa fa-edit"></i></p> </NavLink>
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
