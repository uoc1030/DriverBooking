import React, { Component } from 'react'
import DefaultNavbarAdmin from './Admin'
import Admin from '../components/Account/Account'

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';

import SearchIcon from '@mui/icons-material/Search';
export default class Account extends Component {
  render() {
    return (
      
      <div>
        <DefaultNavbarAdmin/>
        <div className='pt-10 float-right'>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
           
            endAdornment={
              <SearchIcon position="end">
                <IconButton
                  aria-label="toggle password visibility"
                
                  edge="end"
                >
             <Visibility />
                </IconButton>
              </SearchIcon>
            }
            label="Password"
          />
        </FormControl>
        </div>
        <div className='ml-64 px-5 pt-44'>
        <Admin/>
        </div>
     
      </div>
    )
  }
}


