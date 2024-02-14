import React, { useState } from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@mui/material'
import AddHomeIcon from '@mui/icons-material/AddHome';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
    <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'>
    <Toolbar>
    <Typography><AddHomeIcon/></Typography>
    <Typography>Councilling and visitor management system</Typography>
    <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
    <Tab LinkComponent={NavLink} to='/Signup' label='SignUp'/>
    <Tab LinkComponent={NavLink} to='/Signin' label='SignIn'/>
    <Tab LinkComponent={NavLink} to='/Councillor' label='Add Councillor'/>
    <Tab LinkComponent={NavLink} to='/Appointment' label='Appointment'/>
    <Tab LinkComponent={NavLink} to='/Visitor' label='Add Visitor'/>
    </Tabs></Toolbar></AppBar>
    </div>
  )}

export default Header


