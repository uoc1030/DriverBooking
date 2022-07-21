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
import { NavLink} from 'react-router-dom';
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

  let res = await fetch(`https://funtrip.azurewebsites.net/api/vehicles/${userInfo?.id}`, {
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
  vehicleName,
  manufacturer,
  categoryId,
  groupId,
  img,
  driverId,
  driverName,
  categoryName,

) {
  return { id, vehicleName, manufacturer, categoryId, groupId, img, driverId, driverName,categoryName, };
}

const rows = [
  createData(1, 'Sirus', 'No Informaton', 'No Informaton', 821,'img', 2001 , 'Nguyễn Văn A','Null' ),
  
];

export default function Vehicle() {
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
            const requestURL = 'https://funtrip.azurewebsites.net/api/vehicles?all=true&pageNumber=1&pageSize=10';
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
            <StyledTableCell align="center">vehicleName</StyledTableCell>
            <StyledTableCell align="center">manufacturer</StyledTableCell>
            <StyledTableCell align="center">categoryId</StyledTableCell>
            <StyledTableCell align="center">groupId</StyledTableCell>
            <StyledTableCell align="center">img</StyledTableCell>
            <StyledTableCell align="center">driverId</StyledTableCell>
            <StyledTableCell align="center">driverName</StyledTableCell>
            <StyledTableCell align="center">categoryName</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userInfo && userInfo.map((userInfo,index) => (
            <StyledTableRow key={index}>
 
              <StyledTableCell align="center">{userInfo.id}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.vehicleName}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.manufacturer}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.categoryId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.groupId}</StyledTableCell>
              <StyledTableCell align="center"><img src={userInfo.img} className="w-12 h-8"/></StyledTableCell>
              <StyledTableCell align="center">{userInfo.driverId}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.driverName}</StyledTableCell>
              <StyledTableCell align="center">{userInfo.categoryName}</StyledTableCell>
              <StyledTableCell align="center">
              <NavLink activeStyle={{ color: '#3481C8' }} to={{
                                        pathname: `/Admin/VehiclesEdit/${userInfo.id}`,
                                        state: {
                                            name: userInfo
                                        }
                                    }}
                                   > <p className='pl-6 text-green-500 text-lg'><i className="fa fa-edit"></i></p> </NavLink>
              <p className='pl-6 float-right text-green-500 text-lg'  onClick={() => handleDelete(userInfo) }><i class="fa fa-trash-alt"></i></p>
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
