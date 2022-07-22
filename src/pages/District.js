import React, { Component } from 'react'
import DefaultNavbarAdmin from './Admin'
import Admin from '../components/District/District'

export default class District extends Component {
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
