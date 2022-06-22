import Dashboard from '@mui/icons-material/Dashboard'
import Container from 'components/login/Container'
import React, { Component } from 'react'
import DefaultNavbarAdmin from './Admin'

export default class  extends Component {
  render() {
    return (
      <> 
      <DefaultNavbarAdmin/>
        <Container>
          <Dashboard>
            
          </Dashboard>
        </Container>
        
      </>
    )
  }
}

