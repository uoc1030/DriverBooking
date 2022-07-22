import React, { Component } from 'react'
import DefaultNavbarAdmin from './Admin'
import Admin from '../components/Group/Group'

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';

import SearchIcon from '@mui/icons-material/Search';
export default class Group extends Component {
  render() {
    return (
        <div>
        <DefaultNavbarAdmin/>
        <div className='ml-64 px-5 pt-44'>
        <Admin/>
        </div>
     
      </div>
    )
  }
}
